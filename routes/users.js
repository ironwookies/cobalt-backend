const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('./../controllers/users/');

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	// usersController.getUsers,
	(req, res, next)=>{

	}
);

router.get(
	'/email/:email',
	passport.authenticate('jwt', { session: false }),
	usersController.getUserByEmail
);

router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	usersController.getUser,
);


router.post(
	'/:email',
	passport.authenticate('jwt', { session: false }),
	usersController.addContact
);

module.exports = router;
