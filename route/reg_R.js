const express = require('express');
const regController = require('../controller/reg_C');

const router = express.Router();

router.post('/', regController.reg);

module.exports = router;