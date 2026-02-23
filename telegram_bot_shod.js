// telegram_bot_shod.js
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = process.env.PORT || 3000;

// Bot tokenni shu yerga yozasan
const TOKEN = "8666237860:AAEaCQhHu4E3gvbdYEcPizWtxLPiOtsZuL4";

const bot = new TelegramBot(TOKEN, { polling: true });

// /start komandasi
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom Shodbek! Bot muvaffaqiyatli ishlayapti 🚀");
});

// Har qanday xabarni qabul qilish
bot.on("message", (msg) => {
  if (msg.text !== "/start") {
    bot.sendMessage(msg.chat.id, "Xabaringiz qabul qilindi ✅");
  }
});

// Oddiy web sahifa
app.get("/", (req, res) => {
  res.send("<h2 style='text-align:center; margin-top:50px;'>Telegram Bot ishlayapti 🚀</h2>");
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log("Server " + PORT + "-portda ishlayapti");
});
