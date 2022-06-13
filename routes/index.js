const { Router } = require('express');

const router = Router();

router.use('/webhook', require('./bot.route'));

module.exports = router;
