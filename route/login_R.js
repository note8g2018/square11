const express = require('express');
const loginController = require('../controller/login_C');

const router = express.Router();

router.post('/', loginController.login);

module.exports = router;