const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../../models/User');
const bcrypt = require('bcryptjs');

passport.use(
	new LocalStrategy(async (username, password, done) => {
		User.findOne({ email: username })
			.select('password')
			.then(async (user) => {
				if (!user) {
					done(null, false, { message: 'Incorrect email' });
					return;
				} else if (!bcrypt.compareSync(password, user.password)) {
					done(null, false, { message: 'Incorrect password' });
					return;
				} else {
					let userInfo = await User.findById(user._id);
					done(null, userInfo);
				}
			})
			.catch((err) => done(err));
	}),
);
