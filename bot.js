const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(process.env.TOKEN, { polling: true });

bot.on('message', (msg) => {
  console.log(msg);
});

module.exports = bot;
