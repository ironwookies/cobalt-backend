require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');

const logger = require('../components/log/log.controller');
const authRoute = require('./../routes/auth/auth');
const userRoute = require('./../routes/users');
const chatRoutes = require('./../routes/chats');

const app = express();

app.use(
	cors({
		credentials: true,
		// origin: '',
		origin: ['http://localhost:3001', 'https://cobalt-chat.herokuapp.com/'],
	}),
);

app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

require('./../components/passport')(app);

app.use('/api/', authRoute);
app.use('/api/user', userRoute);
app.use('/api/chat', chatRoutes);
const root = path.join(__dirname, '/../public/');
app.use(express.static(root));
// app.get('/', (req, res) => {
// 	// res.sendFile(__dirname + '/../public/index.html');
// 	res.sendFile(root);
// });

app.use((req, res, next) => {
	if (
		req.method === 'GET' &&
		req.accepts('html') &&
		!req.is('json') &&
		!req.path.includes('.')
	) {
		res.sendFile('index.html', { root });
	} else next();
});
// app.use((req, res, next) => {
// 	res.sendFile(path.join(__dirname, '/../public/index.html'));
// });

// app.use((req, res, next) => {
// 	res.status(404).json({ error: 'Page not found' });
// });

// app.use((err, req, res, next) => {
// 	console.error('ERROR', req.method, req.path, err);

// 	if (!res.headersSent) {
// 		res.status(500);
// 		res.json({ error: err });
// 	}
// });

module.exports = app;
