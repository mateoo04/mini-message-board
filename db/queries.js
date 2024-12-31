const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(text, username) {
  await pool.query('INSERT INTO messages (text, username) VALUES ($1,$2)', [
    text,
    username,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);

  return rows.at(0);
}

async function deleteAllMessages() {
  await pool.query('DELETE FROM messages');
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessageById,
  deleteAllMessages,
};
