const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(process.env.TOKEN, { polling: true });
const chatInfo = require('./chatInfo');

bot.on('message', (msg) => {
  if (msg.text === '/start') {
    chatInfo.chatId = msg.chat.id;
  }
});

module.exports = bot;
