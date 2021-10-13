const User = require('../models').User;
const bcrypt = require('bcryptjs');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const renderSignup = (req, res) => {
	res.render('users/signup.ejs');
};

const renderLogin = (req, res) => {
	res.render('users/login.ejs');
};

//user signup with password encryption
const signup = (req, res) => {
	bcrypt.genSalt(10, (err, salt) => {
		if (err) return res.status(500).json(err);

		bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
			if (err) return res.status(500).json(err);
			req.body.password = hashedPwd;

			User.create(req.body)
				.then((newUser) => {
					const token = jwt.sign(
						{
							username: newUser.username,
							id: newUser.id,
						},
						process.env.JWT_SECRET,
						{
							expiresIn: '30 days',
						}
					);
					res.cookie('jwt', token);
					res.redirect(`/users/profile`);
				})
				.catch((err) => {
					res.send(`err ${err}`);
				});
		});
	});
};

//user login with password comparison and token assignment
const login = (req, res) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).then((foundUser) => {
		if (foundUser) {
			bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
				if (match) {
					const token = jwt.sign(
						{
							username: foundUser.username,
							id: foundUser.id,
						},
						process.env.JWT_SECRET,
						{
							expiresIn: '30 days',
						}
					);
					res.cookie('jwt', token);

					res.redirect(`/users/profile`);
				} else {
					return res.status(400).send('Invalid Username or Password.');
				}
			});
		} else {
			return res.status(400).send('Invalid Username or Password.');
		}
	});
};

module.exports = {
	renderSignup,
	renderLogin,
	signup,
	login,
};
