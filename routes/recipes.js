const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.recipes.renderIndex);
router.get('/new',ctrl.recipes.renderNewRecipe)
router.get('/:index', ctrl.recipes.renderRecipe)


module.exports = router;