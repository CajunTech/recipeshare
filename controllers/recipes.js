const Recipe = require('../models').Recipe;

const renderIndex = (req, res) => {
	Recipe.findAll().then((recipes) => {
		res.render('recipes/index.ejs', {
			recipes,
		});
	});
};
const renderRecipe = (req, res) => {
	Recipe.findByPk(req.params.index)
        .then((recipe) => {
		let instruction = recipe.instructions.split('\n');
        let ingredient = recipe.ingredients.split('\n');
		console.log(recipe);
		res.render('recipes/show.ejs', {
			recipe,
			instruction,
            ingredient,
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
	Recipe.create(req.body).then((newRecipe) => {
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
        res.redirect('/users/profile')
    })
}

module.exports = {
	renderIndex,
	renderRecipe,
	renderNewRecipe,
	createRecipe,
	editRecipe,
	renderEditRecipe,
	deleteRecipe,
	editFavorites,
    removeFavorite
};
