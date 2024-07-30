const express = require('express');
const router = express.Router();

/* GET home page. */
const indexController = require('../controllers/indexContoller');

/* GET users listing. */
router.get('/', indexController.index_get);

module.exports = router;
