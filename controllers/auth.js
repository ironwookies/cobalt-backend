const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('./../models/User');

exports.profile = (req, res, next) => {
	res.status(200).json({
		status: 'success',
		message: 'user is logged in',
	});
};

exports.profileUpdate = (req, res, next) => {
	res.status(200).json({ tes: 'test2' });
};

exports.singup = async (req, res, next) => {
	if (
		!req.body.email ||
		!req.body.password ||
		!req.body.confirmPassword ||
		!req.body.firstName ||
		!req.body.familyName
	) {
		res.status(422).json({
			success: false,
			message_eng: 'Please fill all the fields before signing up.',
			message_esp: 'Por favor llene todos los campos antes de registrarse.',
		});
	} else {
		try {
			let result = await User.find({ email: req.body.email });
			if (result.length === 0) {
				const userCreated = new User({
					// username: req.body.username.toLowerCase(),
					password: req.body.password,
					email: req.body.email.toLowerCase(),
					firstName: req.body.firstName,
					lastName: req.body.familyName,
				});
				userCreated.save((error) => {
					if (error) {
						return res.status(422).json({
							success: false,
							message_eng: 'Username already on use, please select another.',
							message_esp:
								'El nombre de usuario ya esta en uso, por favor seleccione otro.',
						});
					}
				});
				const token = jwt.sign(userCreated.toJSON(), process.env.SECRET);
				res.status(201).json({
					success: true,
					message: 'Account created succesfully',
					token,
					user: userCreated,
				});
			} else {
				return res.status(422).json({
					success: false,
					message_eng: 'Email already on use, please select another.',
					message_esp: 'El correo ya esta en uso, por favor seleccione otro.',
				});
			}
		} catch (error) {
			console.log(error);
			res.status(200).json({ error });
		}
	}
};

exports.login = async (req, res, next) => {
	return passport.authenticate(
		'local',
		{ session: false },
		(err, user, info) => {
			if (err || !user) {
				return res.status(400).json({
					message: 'Something is not right',
				});
			}
			req.login(user, { session: false }, (err) => {
				if (err) {
					res.send(err);
				}
				const token = jwt.sign(user.toJSON(), process.env.SECRET);
				return res.json({ user, token });
			});
		},
	)(req, res, next);
};
