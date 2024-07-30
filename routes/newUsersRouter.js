const express = require('express');
const router = express.Router();

const newUsersController = require('../controllers/newUsersController');

/* GET new user form */
router.get('/', newUsersController.get_new);

/* POST new user */
router.post('/', newUsersController.post_new);

module.exports = router;
