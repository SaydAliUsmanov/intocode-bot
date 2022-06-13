const bot = require('../bot');

module.exports.botsController = {
  sendMessage: async (req, res) => {
    try {
      const data = {
        name: req.body.head_commit.committer.name,
        commit: req.body.head_commit.message,
        chatId: process.env.iqaChatId,
      };

      bot.sendMessage(
        data.chatId,
        `${data.name} -> Отправил ПР | Коммит: ${data.commit}`
      );

      res.json({ message: 'Успешно!' });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
