const asyncHandler = require('express-async-handler');

// Display form to input username
exports.get_new = asyncHandler(async (req, res) => {
  res.render('new', { title: 'New Username Form' });
});

// Handle saving new username to DB
exports.post_new = asyncHandler(async (req, res) => {
  console.log('username to be saved: ', req.body.username);
})