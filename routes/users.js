const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:index', ctrl.users.renderProfile);
router.put('/profile/:index', ctrl.users.editUser)
router.delete('/profile/:index', ctrl.users.deleteUser)
router.get('/changepassword', ctrl.users.renderChangePassword)
router.put('/changepassword', ctrl.users.changePassword)

module.exports = router;