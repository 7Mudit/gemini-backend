const express = require("express");
const chatController = require("../controllers/gemini");
const router = express.Router();

router.post("/gemini", chatController);

module.exports = router;
