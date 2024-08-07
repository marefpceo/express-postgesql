const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const db = require('../db/queries');

// Display form to input username
exports.get_new = asyncHandler(async (req, res, next) => {
  res.render('usernameForm', { title: 'New Username Form' });
});

// Handle saving new username to DB
exports.post_new = [
  body('username')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .isAlphanumeric()
    .withMessage('First name has non-alphanumeric characters.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const { username } = req.body;

    if(!errors.isEmpty) {
      res.render('usernameForm', {
        errors: errors.array()
      });
    } else {
      await db.insertUsername(username);
      res.redirect('/');
      // res.send(`Handle saving new username to DB. Username: ${req.body.username}`);
    }
  }),
];