const socketIo = require('socket.io');
const axios = require('axios');

const app = require('./app');
const port = process.env.PORT || 4000;

const database = require('./database');

database.connect();
const server = app.listen(port, () => {
	console.log('Express server successfully started...');
	console.log(`Sever IP address: http://${process.env.IP}:${port}`);
	console.log(`Express server listening on port ${port}`);
});

const io = socketIo(server);

io.on('connection', (socket) => {
	console.log('New client connected'),
	// setInterval(() => getApiAndEmit(socket), 10000);
	socket.on('disconnect', () => console.log('Client disconnected'));
});

module.exports = server;
