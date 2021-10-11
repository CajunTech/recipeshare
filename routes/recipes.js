const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.recipes.renderIndex);
router.get('/new', ctrl.recipes.renderNewRecipe);
router.post('/new', ctrl.recipes.createRecipe);
router.put('/:index', ctrl.recipes.editRecipe);
router.get('/:index/edit', ctrl.recipes.renderEditRecipe);
router.get('/:index', ctrl.recipes.renderRecipe);
router.delete('/:index', ctrl.recipes.deleteRecipe)
router.put('/:index/favorites', ctrl.recipes.editFavorites);

module.exports = router;
