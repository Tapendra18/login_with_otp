const express = require("express");

const router = new express.Router();
const controllers = require("../controllers/userController");
//Routues

router.post("/user/register",controllers.userregister);
router.post("/user/sendotp", controllers.userOtpSend);



module.exports = router;