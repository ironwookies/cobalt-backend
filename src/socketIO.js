const socketIo = require('socket.io');
const server = require('./server');

const io = socketIo(server);

const connectEvents = (socket) => {
	// console.log('user connected', io.sockets.clients());

	socket.on('SEND_MESSAGE', function(data) {
		io.emit('RECEIVE_MESSAGE', data);
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
