const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function searchDatabase(searchInput) {
  const { rows } = await pool.query('SELECT * FROM usernames WHERE (searchInput) VALUES ($1)', [searchInput]);
}

module.exports = {
  getAllUsernames,
  insertUsername
};
