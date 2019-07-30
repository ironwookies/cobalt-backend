require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const logger = require('../components/log/log.controller');
const authRoute = require('./../routes/auth/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger);

require('./../components/passport')(app);

app.use('/', authRoute);

app.use((req, res, next) => {
	res.status(404).json({ error: 'Page not found' });
});

app.use((err, req, res, next) => {
	console.error('ERROR', req.method, req.path, err);

	if (!res.headersSent) {
		res.status(500);
		res.json({ error: err });
	}
});

module.exports = app;
