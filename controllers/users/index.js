const mongoose = require('mongoose');

const User = require('./../../models/User');

exports.getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
		next(error);
	}
};

exports.getUser = async (req, res, next) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		return res.status(404).json({ message: 'Invalid user id' });
	}
	try {
		const users = await User.findById(req.params.id);
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
		next(error);
	}
};

exports.getUserByEmail = async (req, res, next) => {
	try {
		let result = await User.findOne({ email: req.params.email });
		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404).json({ message: 'No user found' });
		}
	} catch (error) {
		next(error);
	}
};

exports.addContact = async (req, res, next) => {
	try {
		let contact = await User.findOne({ email: req.params.email });
		if (contact) {
			await User.findByIdAndUpdate(req.user._id, {
				$addToSet: { contacts: contact._id },
			});
			res.status(200).json({ message: 'Contact added' });
		} else {
			res.status(404).json({ message: 'Could not find contact' });
		}
	} catch (error) {
		next(error);
	}
};
