require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('../components/log/log.controller');
const authRoute = require('./../routes/auth/auth');
const userRoute = require('./../routes/users');
const chatRoutes = require('./../routes/chats');

const app = express();

app.use(
	cors({
		credentials: true,
		origin: '*',
		// origin: ['http://localhost:3001', '*'],
	}),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

require('./../components/passport')(app);

app.use('/', authRoute);
app.use('/user', userRoute);
app.use('/chat', chatRoutes);

app.use((req, res, next) => {
	res.sendFile(__dirname + '/public/index.html');
});

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
