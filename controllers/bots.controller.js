const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(process.env.TOKEN, { polling: true });

module.exports.botsController = {
  sendMessage: async (req, res) => {
    try {
      const data = {
        name: req.body.head_commit.committer.name,
        commit: req.body.head_commit.message,
      };

      bot.sendMessage(
        process.env.iqaChatId,
        `${data.name} -> Отправил ПР | Коммит: ${data.commit}`
      );

      return res.json({ message: 'Успешно!' });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
