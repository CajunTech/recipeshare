const Recipe = require('../models').Recipe;
const Ingredient = require('../models').Ingredient

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
				model: Ingredient,
				attributes: ['recipeId', 'ingredient'],
			},
		],
        })
        .then((recipe) => {
		let instruction = recipe.instructions.split('\n');
		console.log(recipe);
		res.render('recipes/show.ejs', {
			recipe,
			instruction
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
	Recipe.create(req.body).then((newrecipe) => {
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

module.exports = {
	renderIndex,
	renderRecipe,
	renderNewRecipe,
	createRecipe,
	editRecipe,
	renderEditRecipe,
	deleteRecipe,
	editFavorites,
};
