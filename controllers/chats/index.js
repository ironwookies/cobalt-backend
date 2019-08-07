const mongoose = require('mongoose');

const User = require('./../../models/User');
const Chat = require('./../../models/Chat');
const Message = require('./../../models/Message');

exports.createChat = async (req, res, next) => {
	if (
		!req.body.users ||
		!req.body.name ||
		!req.body.description ||
		!req.body.type
	) {
		return res.status(422).json({ message: 'Chat could not be created' });
	} else {
		try {
			req.body.users.forEach((user) => {
				if (!mongoose.Types.ObjectId.isValid(user)) {
					return res.status(404).json({ message: 'Invalid users' });
				}
			});

			let newChat = new Chat(req.body);
			req.body.users.forEach(async (user) => {
				await User.findByIdAndUpdate(user, { $push: { chat: newChat._id } });
			});
			newChat.save((error) => {
				if (error) {
					console.log(error);
					return res.status(422).json({ message: 'Chat could not be created' });
				}
				return res.status(200).json({ message: 'Chat created', chat: newChat });
			});
		} catch (error) {
			next(error);
		}
	}
};

exports.getChatHistory = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
			return res.status(202).json({ message: 'Chat not found' });
		}

		let chatHistory = await Chat.findById(req.params.id)
			.populate('messages')
			.populate({ path: 'messages', populate: { path: 'creator' } });
		if (!chatHistory) {
			return res.status(202).json({ message: 'This chat has no history' });
		}

		return res.status(200).json(chatHistory);
	} catch (error) {
		next(error);
	}
};

exports.addMessage = async (req, res, next) => {
	try {
		if (!mongoose.Types.ObjectId.isValid(req.params.id) || !req.body.message) {
			return res.status(404).json({ message: 'Chat not found' });
		}
		let message = new Message({
			content: req.body.message,
			creator: req.user._id,
			chat: req.params.id,
			type: req.body.type || 'Text',
		});

		message.save((error) => {
			if (error) {
				return res.status(422).json({ message: 'Message could not be sent' });
			}
		});

		await Chat.findByIdAndUpdate(req.params.id, {
			$addToSet: { messages: message._id },
		});

		return res.status(200).json({ message: 'Sent' });
	} catch (error) {
		next(error);
	}
};

exports.getChatGroups = async (req, res, next) => {
	try {
		let chatGroups = await Chat.find({
			users: mongoose.Types.ObjectId(req.user._id),
		}).select('-messages');
		res.status(200).json(chatGroups);
	} catch (error) {
		next(error);
	}
};
