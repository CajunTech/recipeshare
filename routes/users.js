const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile', ctrl.users.renderProfile);
router.put('/profile', ctrl.users.editUser)
router.delete('/profile', ctrl.users.deleteUser)
router.get('/changepassword', ctrl.users.renderChangePassword)
router.put('/changepassword', ctrl.users.changePassword)

module.exports = router;