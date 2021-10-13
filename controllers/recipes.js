const Recipe = require('../models').Recipe;
const User = require('../models').User;

const renderIndex = (req, res) => {
	Recipe.findAll().then((recipes) => {
		res.render('recipes/index.ejs', {
			recipes,
		});
	});
};
const renderRecipe = (req, res) => {
	Recipe.findByPk(req.params.index, {
		include: [
			{
				model: User,
				attributes: ['id'],
			},
		],
	}).then((recipe) => {
		console.log(recipe);
		let isFavorite = false;
			for (i = 0; i < recipe.Users.length; i++) {
				if (recipe.Users[i].id === req.user.id) {
					isFavorite = true;
				}
			}
		console.log(isFavorite);
        let amAuthor = req.user.id
		let instruction = recipe.instructions.split('\n');
		let ingredient = recipe.ingredients.split('\n');
		res.render('recipes/show.ejs', {
			recipe,
			instruction,
			ingredient,
			isFavorite,
            amAuthor,
            amAdmin : req.user.username
		});
	});
};

const renderEditRecipe = (req, res) => {
	Recipe.findByPk(req.params.index).then((recipe) => {
		res.render('recipes/edit.ejs', { recipe });
	});
};

const editRecipe = (req, res) => {
	Recipe.update(req.body, {
		where: { id: req.params.index },
		returning: true,
	}).then(() => {
		console.log('successful');
		res.redirect(`/recipes/`);
	});
};

const renderNewRecipe = (req, res) => {
	res.render('recipes/new.ejs');
};

const createRecipe = (req, res) => {
    req.body.author = req.user.id
	Recipe.create(req.body).then(() => {
		res.redirect('/');
	});
};

const deleteRecipe = (req, res) => {
	console.log('route run');
	Recipe.destroy({ where: { id: req.params.index } }).then(() => {
		res.redirect('/');
	});
};

const editFavorites = (req, res) => {
	Recipe.findByPk(req.params.index).then((foundRecipe) => {
		foundRecipe.addUser(req.user.id);
		console.log(req.user.id);
		res.redirect('/recipes');
	});
};

const removeFavorite = (req, res) => {
	console.log('remove reached');
	Recipe.findByPk(req.params.index).then((foundRecipe) => {
		foundRecipe.removeUser(req.user.id);
		res.redirect('/users/profile');
	});
};

module.exports = {
	renderIndex,
	renderRecipe,
	renderNewRecipe,
	createRecipe,
	editRecipe,
	renderEditRecipe,
	deleteRecipe,
	editFavorites,
	removeFavorite,
};
