const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(process.env.TOKEN, { polling: true });

module.exports.botsController = {
  sendMessage: (req, res) => {
    try {
      // Если произошел fork
      if (req.body.forkee) {
        bot.sendMessage(
          process.env.iqaChatId,
          `${req.body.forkee.owner.login} сделал форк репозитория`
        );
        return res.json({ message: 'Успешно!' });
      }
      // Если произошло слияние ветки с main
      if (req.body.head_commit?.committer.name === 'GitHub') {
        bot.sendMessage(
          process.env.iqaChatId,
          `Произошло слияние ветки с main`
        );
        return res.json({ message: 'Успешно!' });
      }
      // Открыл ПР
      if (req.body.action === 'opened') {
        bot.sendMessage(
          process.env.iqaChatId,
          `${req.body.pull_request.user.login} => Отправил ПР`
        );
        return res.json({ message: 'Успешно!' });
      }
      // Обновил ПР
      if (req.body.action === 'synchronize') {
        bot.sendMessage(
          process.env.iqaChatId,
          `${req.body.pull_request.user.login} => Обновил ПР`
        );
        return res.json({ message: 'Успешно!' });
      }
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
