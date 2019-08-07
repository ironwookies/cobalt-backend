const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		content: { type: String, default: '' },
		chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
		creator: { type: Schema.Types.ObjectId, ref: 'User' },
		type: { type: String, enum: ['Text', 'Image'] },
	},
	{
		timestamps: true,
	},
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
