const db = require('../db/queries');

const asyncHandler = require('express-async-handler');

exports.index_get = asyncHandler(async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(usernames);
  res.render('index', 
    { 
      title: 'Index Page',
      usernames: usernames
    });
});