const socketIo = require('socket.io');
const server = require('./server');

const User = require('./../models/User');

const io = socketIo(server);

const connectEvents = (socket) => {
	User.findByIdAndUpdate(socket.handshake.query.user, { online: true });
	socket.join(socket.handshake['query']._id);
	socket.on('disconnect', function() {
		socket.leave(socket.handshake['query']._id);
		User.findByIdAndUpdate(socket.handshake.query.user, { online: false });
	});

	socket.on('chat message', function(msg) {
		io.to(socket.handshake['query']._id).emit('chat message', msg);
	});

	socket.on('chat message', function(msg) {
		socket.broadcast.emit('received', { message: msg });
	});
};

console.log('Socket Started....');
io.on('connect', connectEvents);
