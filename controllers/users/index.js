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
