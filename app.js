const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const app = express();
const PORT = 3000;

const token = '5933197402:AAGhoImd2iKwkmoSxmuAMdcIjx5i6Cbd3h4';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});

app.post(`/bot${token}`, (req, res) =>{
    
});