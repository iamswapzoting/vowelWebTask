// const nodeMailer = require("nodemailer")


// const mail = async () => {
//     let testAccount = await nodeMailer.createTestAccount()

//     const config = nodeMailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false,
//         // requireTLS: true,
//         auth: {
//             user: ,
//             pass: ,
//         }
//     })

//     const sendEmailNow = await config.sendMail({
//         from:,
//         to: ,
//         subject: "Email verification",
//         text: token,
//         html :"<h1>hiii</h1> "
//     })

//     console.log("message sent ", sendEmailNow.messageId);

//     console.log("prevew URL ", nodeMailer.getTestMessageUrl(sendEmailNow));
// }

// mail().catch((e)=>  console.log(e))

// const transporter = nodeMailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: "wikineel26@gmail.com",
//         pass: "tbtecbunjesjfhzd"
//     }
// });

// module.exports.transporter = transporter
