const express = require('express');
const articleController = require('../controller/article_C');

const router = express.Router();

router.post('/', articleController.write);
router.post('/all', articleController.all);

module.exports = router;