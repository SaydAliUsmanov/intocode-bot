const TelegramApi = require('node-telegram-bot-api');
const bot = new TelegramApi(process.env.TOKEN, { polling: true });

module.exports.botsController = {
  sendMessage: (req, res) => {
    try {
      // Настройки для текста
      const opts = {
        parse_mode: 'Markdown',
      };
      // Если произошел fork
      if (req.body.forkee) {
        bot.sendMessage(
          process.env.iqaChatId,
          `⚠️_${req.body.forkee.owner.login} сделал форк репозитория_`,
          opts
        );
        return res.json({ message: 'Успешно!' });
      }
      if (
        req.body.pull_request.state === 'closed' &&
        req.body.pull_request.merged_at
      ) {
        bot.sendMessage(
          process.env.iqaChatId,
          `⚠️_Ветка «main» обновлена (слияние с «${req.body.pull_request.head.ref}»)_`,
          opts
        );
        return res.json({ message: 'Успешно!' });
      }
      // Открыл ПР
      if (req.body.action === 'opened') {
        bot.sendMessage(
          process.env.iqaChatId,
          `⚠️_${req.body.pull_request.user.login} открыл PR «${req.body.pull_request.title}»_`,
          opts
        );
        return res.json({ message: 'Успешно!' });
      }
      // Обновил ПР
      if (req.body.action === 'synchronize') {
        bot.sendMessage(
          process.env.iqaChatId,
          `⚠️_${req.body.pull_request.user.login} обновил PR «${req.body.pull_request.title}»_`,
          opts
        );
        return res.json({ message: 'Успешно!' });
      }
    } catch (e) {
      return res.status(400).json({ error: e.toString() });
    }
  },
};
