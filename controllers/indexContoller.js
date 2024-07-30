const asyncHandler = require('express-async-handler');

exports.index_get = asyncHandler(async (req, res) => {
  res.render('index', { title: 'Index Page'});
  console.log('usernames will be logged here - wip');
});