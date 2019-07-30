const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema(
	{
		users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
		name: { type: String, minlength: 3 },
		description: { type: String, minlength: 1 },
		messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
		type: { type: String, enum: ['group', 'private'] },
	},
	{
		timestamps: true,
	},
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
