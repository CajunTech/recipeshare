const User = require('../models').User;
const bcrypt = require('bcryptjs');

const renderProfile = (req, res) => {
	User.findByPk(req.params.index).then((user) => {
		console.log(req.username);
		res.render('users/profile.ejs', {
			user,
		});
	});
};

const editUser = (req, res) => {
	User.update(req.body, {
		where: { id: req.user.id },
	}).then(() => {
		res.redirect(`/users/profile/${req.params.index}`);
	});
};

const deleteUser = (req, res) => {
	User.destroy({ where: { id: req.params.index } }).then(() => {
		res.redirect('/');
	});
};

const editPassword = (req, res) => {
	console.log('Enter New Password:');
};

const renderChangePassword = (req, res) => {
	res.render('users/changepass.ejs', {
		id: req.params.id,
	});
};

const changePassword = (req, res) => {
	console.log(req.body.password, req.body.passwordconfirm);
	if (req.body.password === req.body.passwordconfirm) {
		User.findByPk(req.user.id).then((user) => {
			bcrypt.genSalt(10, (err, salt) => {
				if (err) return res.status(500).json(err);
				bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
					if (err) return res.status(500).json(err);
					user.update({password: hashedPwd}).then(() => {
					res.redirect('/recipes');
					 })
			});
		});
})
	} else {
		return res.status(400).send('Passwords did not match.');
	}
}
module.exports = {
	renderProfile,
	editUser,
	deleteUser,
	editPassword,
	changePassword,
	renderChangePassword,
};
