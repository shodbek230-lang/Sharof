const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = process.env.PORT || 3000;

/* =========================
   TOKENNI SHU YERGA YOZ
========================= */
const TOKEN = "8515883015:AAGtuWUuOD2lUXjtL03YYJ5bGquY1ZKNzCo";

/* ========================= */

const bot = new TelegramBot(TOKEN, { polling: true });

// Bot komandalar
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom Shodbek! Bot ishlayapti 🚀");
});

bot.on("message", (msg) => {
  if (msg.text !== "/start") {
    bot.sendMessage(msg.chat.id, "Xabaringiz qabul qilindi ✅");
  }
});

// Oddiy web sahifa
app.get("/", (req, res) => {
  res.send("<h2>Bot ishlayapti 🚀</h2>");
});

app.listen(PORT, () => {
  console.log("Server " + PORT + "-portda ishlayapti");
});
