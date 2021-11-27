const express = require('express');
const emailController = require('../controller/email_C');

const router = express.Router();

router.post('/', emailController.email);

module.exports = router;