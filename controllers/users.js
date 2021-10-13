const User = require('../models').User;
const Recipe = require('../models').Recipe;

const bcrypt = require('bcryptjs');

const renderProfile = (req, res) => {
	//getting recipes where user is author for display on page
	Recipe.findAll({
		where: { author: req.user.id },
	}).then((owner) => {
		User.findByPk(req.user.id, { include: [{ model: Recipe }] }).then(
			(user) => {
				res.render('users/profile.ejs', {
					user,
					owner,
				});
			}
		);
	});
};

const editUser = (req, res) => {
	User.update(req.body, {
		where: { id: req.user.id },
	}).then(() => {
		res.redirect(`/users/profile`);
	});
};

const deleteUser = (req, res) => {
	User.destroy({ where: { id: req.user.id } }).then(() => {
		res.redirect('/');
	});
};

const renderChangePassword = (req, res) => {
	res.render('users/changepass.ejs', {
		id: req.user.id,
	});
};
//change password with double entry for compare purposes
const changePassword = (req, res) => {
	if (req.body.password === req.body.passwordconfirm) {
		User.findByPk(req.user.id).then((user) => {
			bcrypt.genSalt(10, (err, salt) => {
				if (err) return res.status(500).json(err);
				bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
					if (err) return res.status(500).json(err);
					user.update({ password: hashedPwd }).then(() => {
						res.redirect('/recipes');
					});
				});
			});
		});
	} else {
		return res.status(400).send('Passwords did not match.');
	}
};

module.exports = {
	renderProfile,
	editUser,
	deleteUser,
	changePassword,
	renderChangePassword,
};
