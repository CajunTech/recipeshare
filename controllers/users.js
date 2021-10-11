const User = require('../models').User;

const renderProfile = (req, res) => {
	User.findByPk(req.params.index)
	.then((user) => {
		console.log(req.username)	
		res.render('users/profile.ejs', {
			user
		});
	});
};

const editUser = (req, res) => {
	User.update(req.body, {
		where: { id: req.params.index }})
		.then(() => {
			// console.log (req.body)
		res.redirect(`/users/profile/${req.params.index}`);
	})
}

const deleteUser = (req, res) => {
	User.destroy({ where: { id: req.params.index } }).then(() => {
		res.redirect('/');
	});
};

const editPassword = (req, res) => {
	console.log('Enter New Password:')
}

const renderChangePassword = (req, res) => {
	res.render('users/changepass.ejs', {
		id: req.params.id,
	});
};

const changePassword = (req, res) => {
	console.log('you called?')
	if (req.body.password === req.body.passwordconfirm) {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) return res.status(500).json(err);
			bcrypt
				.hash(req.body.password, salt, (err, hashedPwd) => {
					if (err) return res.status(500).json(err);
					req.body.password = hashedPwd;
					console.log(req.user.id)
					User.update(req.body)({ where: {id:req.user.id} });
				});
		});
	}
};
module.exports = {
	renderProfile,
	editUser,
	deleteUser,
	editPassword,
	changePassword,
	renderChangePassword
};