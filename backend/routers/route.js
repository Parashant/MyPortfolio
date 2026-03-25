import express from "express";
import sendTelegramMessage from "../telegram.js";

const router = express.Router();

// Route to send a message to Telegram
router.post("/postmessage", async (req, res) => {
  const { name, phone, message } = req.body;

  // Validate the request
  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Name, phone number, and message are required." });
  }

  try {
    // Send the message to Telegram
    const result = await sendTelegramMessage(name, phone, message);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;