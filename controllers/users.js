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

module.exports = {
	renderProfile,
	editUser,
	deleteUser,
	editPassword
};