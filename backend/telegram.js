import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Send a message to Telegram
const sendTelegramMessage = async (name, phone, message) => {
  const formattedMessage = `
📩 *New Message Received:*
👤 *Name:* ${name}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: formattedMessage,
      parse_mode: "Markdown",
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message to Telegram:", error.message);
    throw new Error("Failed to send message to Telegram.");
  }
};

export default sendTelegramMessage;
