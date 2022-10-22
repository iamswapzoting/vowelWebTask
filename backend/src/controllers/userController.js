const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
// const transporter = require("../mailConfig/mailConfig")
const nodeMailer = require("nodemailer")

let userCheck = /^[a-zA-Z\-]+$/;
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;



const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "",
        pass: ",
    }
});



const userRegister = async function (req, res) {

    try {
       
        let { fname, lname, email, password } = req.body;
        
        // first Name validation
        if (typeof (fname) != 'string' || !fname) return res.status(404).send({ msg: "first Name is required" })
        if (!fname.match(userCheck)) return res.status(400).send({ msg: "first Name is not valid " })

        // last Name validation
        if (typeof (lname) != 'string' || !lname) return res.status(404).send({ msg: "last Name is required" })
        if (!lname.match(userCheck)) return res.status(400).send({ msg: "last Name is not valid " })

        // Email Validation
        if (typeof (email) != "string" || !email) return res.status(404).send({ msg: "Email is Required" })
        if (!email.match(mailRegex)) return res.status(400).send({ msg: "Email is not Valid" })

        //password validation
        if (typeof (password) != "string" || !password) return res.status(404).send({ msg: "Password is required" })
        if (!password.match(validPassword)) return res.status(400).send({ msg: "password is not Valid" })

        //Email unique
        const userEmail = await userModel.findOne({ email: email }); //email exist or not
        if (userEmail) { return res.status(400).send({ status: false, msg: "Email already exist" }); }


        //generating secrete key to verify email
        let token = jwt.sign(
            {
                emailId: email,
                organisation: "vowelWeb",
            },
            "My-secret-Key-forEmail"
        );

        const mailOptions = {
            from: ",
            to: email,
            subject: "Email verification",
            text: "http://localhost:3000/token/" + token
        }

        transporter.sendMail(mailOptions, async function (error, info) {
            if (error) {
                return res.status(404).json({ msg: error.message })
            } else {
                // create entry of user in Database
                let savedData = await userModel.create(req.body);
                return res.status(201).json({ msg: "registration Done Successfully please Check Email for Email verification" })
            }
        })
        // res.setHeader("x-api-key", token);



    } catch (error) {
        console.log("This is the error :", error.message)
        res.status(500).send({ msg: "Error", error: error.message })
    }
}

const verifyEmailFunction = async function (req, res) {
    let token = req.params.token

    const decodedToken = jwt.verify(token, "My-secret-Key-forEmail")
    if (!decodedToken) return res.status(404).send({ status: false, message: "Invalid link" });

    const updateVerification = await userModel.findOneAndUpdate({ email: decodedToken.emailId }, { emailVerify: true }, { new: true })

    return res.status(200).send({ msg: "Email successfully Verified" })

}
const loginUser = async function (req, res) {
    try {
        let email = req.body.email;
        let password = req.body.password;

        if(!email) return res.status(404).send({ status: false, msg: "please Input Email" });

        if(!password) return res.status(404).send({ status: false, msg: "please Input password" });

        let user = await userModel.findOne({ email: email, password: password }).select({password:0})

        if (!user) return res.status(404).send({ status: false, msg: "Email-Id or the password is not exist" });

        if (user.emailVerify == false) return res.status(400).send({ msg: "Email is Not verified" })

        let token = jwt.sign(
            {
                userId: user._id,
                organisation: "vowelWeb",
            },
            "My-secret-Key"
        );
        res.setHeader("x-api-key", token);
        //return res.redirected("http://localhost:3000/......")
        return res.status(200).send({ status: true, data: user , });
    }
    catch (error) {
        console.log("This is the error :", error.message)
        return res.status(500).send({ msg: "Error", error: error.message })
    }
};

// const getProfile = function (req,res){
//     let 
// }
module.exports = { userRegister, verifyEmailFunction, loginUser }
