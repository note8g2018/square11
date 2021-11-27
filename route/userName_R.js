const express = require('express');
const userNameController = require('../controller/userName_C');

const router = express.Router();

router.post('/', userNameController.userName);

module.exports = router;