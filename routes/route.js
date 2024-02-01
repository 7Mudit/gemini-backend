const express = require("express");
const chatController = require("../controllers/gemini");
const { mailSender } = require("../controllers/nodemailer");
const router = express.Router();

router.post("/gemini", chatController);
router.post("/send-email", mailSender);

module.exports = router;
