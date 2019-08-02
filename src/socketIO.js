const socketIo = require('socket.io');
const server = require('./server');

// const Message = require('./../models/User');

const io = socketIo(server);

const connectEvents = (socket) => {
	socket.join(socket.handshake['query']._id);
	// console.log('user joined room #' + socket.handshake['query']._id);
	// socket.on('SEND_MESSAGE', function(data) {
	// 	io.emit('RECEIVE_MESSAGE', data);
	// });
	socket.on('disconnect', function() {
		socket.leave(socket.handshake['query']._id);
		// console.log('user disconnected from room ', socket.handshake['query']._id);
	});

	socket.on('chat message', function(msg) {
		// console.log(msg);
		io.to(socket.handshake['query']._id).emit('chat message', msg);
	});

	// socket.on('disconnect', function() {
	// 	console.log('user disconnected');
	// });

	socket.on('chat message', function(msg) {
		// console.log('message: ' + msg);
		socket.broadcast.emit('received', { message: msg });
		console.log(msg);
	});
};

console.log('Socket Started....');
io.on(
	'connect',
	// (socket) => {
	// socket.on('SEND_MESSAGE', function(data) {
	// 	io.emit('RECEIVE_MESSAGE', data);
	// });
	// }
	connectEvents,
);
