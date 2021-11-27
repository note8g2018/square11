const express = require('express');
const logoutController = require('../controller/logout_C');

const router = express.Router();

router.post('/', logoutController.logout);

module.exports = router;