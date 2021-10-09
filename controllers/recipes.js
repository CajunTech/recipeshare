const Recipe = require('../models').Recipe;

const renderIndex = (req, res) => {
    Recipe.findAll().then((recipes) => {
        res.render('recipes/index.ejs', {
            recipes
        })
    })
};
const renderRecipe = (req, res) => {
    Recipe.findByPk(req.params.index).then((recipe) => {
        let instruction = recipe.instructions.split("\n")
        console.log(instruction)
        res.render('recipes/show.ejs', {
            recipe, instruction
        })
    })
};

const renderNewRecipe = (req, res) => {
    res.render('recipes/new.ejs')
}

const createRecipe = (req, res) => {
    Recipe.create(req.body).then((newrecipe) => {
        res.redirect('/')
    })
}

module.exports = {
	renderIndex,
    renderRecipe,
    renderNewRecipe,
    createRecipe
};