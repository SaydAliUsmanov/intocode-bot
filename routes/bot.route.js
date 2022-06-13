const { Router } = require('express');
const { botsController } = require('../controllers/bots.controller');

const router = Router();

router.post('/', botsController.sendMessage);

module.exports = router;
