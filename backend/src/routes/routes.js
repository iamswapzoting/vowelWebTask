const express = require("express");
const router = express.Router();

const {userRegister,verifyEmailFunction,loginUser} = require("../controllers/userController")

router.post("/register", userRegister);
router.post("/login",loginUser);
router.get("/token/:token/", verifyEmailFunction);


module.exports = router;