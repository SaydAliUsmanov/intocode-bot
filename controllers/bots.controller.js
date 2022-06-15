const bot = require('../bot');
const chatInfo = require('../chatInfo');

module.exports.botsController = {
  sendMessage: async (req, res) => {
    try {
      if (chatInfo.chatId === +process.env.iqaChatId) {
        const data = {
          name: req.body.head_commit.committer.name,
          commit: req.body.head_commit.message,
        };

        bot.sendMessage(
          chatInfo.chatId,
          `${data.name} -> Отправил ПР | Коммит: ${data.commit}`
        );

        return res.json({ message: 'Успешно!' });
      }
      return res.json({ message: 'Введите тег в чат для запуска бота!' });
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
