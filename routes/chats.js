const express = require('express');
const router = express.Router();
const passport = require('passport');

const chatController = require('./../controllers/chats/');

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	chatController.createChat,
);

router.get(
	'/history/:id',
	passport.authenticate('jwt', { session: false }),
	chatController.getChatHistory,
);

router.post(
	'/messages/:id',
	passport.authenticate('jwt', { session: false }),
	chatController.addMessage,
);

router.get(
	'/groups',
	passport.authenticate('jwt', { session: false }),
	chatController.getChatGroups,
);

module.exports = router;
