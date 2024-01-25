// Import necessary modules
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Controller function for handling POST requests
async function chatController(req, res) {
  try {
    const { messages } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      // history: [ ... ],
      // Additional configuration as needed
    });

    if (!messages) {
      return res.status(400).send("Messages are required");
    }

    const latestMessage = messages[messages.length - 1].parts;
    const result = await chat.sendMessage(latestMessage);

    const response = result.response;
    const text = await response.text();

    return res.json(text);
  } catch (err) {
    console.error("Conversation Error", err);
    return res.status(500).send("Internal Error");
  }
}

module.exports = chatController;
