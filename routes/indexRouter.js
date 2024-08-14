const express = require('express');

const router = express.Router();

/* GET home page. */
const indexController = require('../controllers/indexContoller');

/* GET users listing. */
router.get('/', indexController.index_get);

/* POST users search results */
router.post('/', indexController.index_post);

/* GET to delete user list */
router.get('/delete', indexController.index_delete);

module.exports = router;
