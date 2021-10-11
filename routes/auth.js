const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.auth.renderSignup);
router.get('/login', ctrl.auth.renderLogin);
router.post('/signup', ctrl.auth.signup)
router.post('/login',ctrl.auth.login)
router.get('/changepassword/:id', ctrl.auth.renderChangePassword)
router.put('/changepassword', ctrl.auth.changePassword)
module.exports = router;