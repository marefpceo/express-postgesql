const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

exports.index_get = asyncHandler(async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(usernames);
  res.render('index', 
    { 
      title: 'Index Page',
      usernames
    });
});

exports.index_post = asyncHandler(async (req, res) => {
  const input = req.body.searchInput;
  const usernames = await db.searchDatabase(input);
  console.log(usernames);
  res.render('index', {
    title: 'Index Page',
    usernames
  });
});

exports.index_delete = asyncHandler(async (req, res) => {
  await db.deleteList();
  res.redirect('/');
});