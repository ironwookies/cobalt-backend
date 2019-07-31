const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('./../controllers/users/');

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	usersController.getUsers,
);
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	usersController.getUser,
);

module.exports = router;
