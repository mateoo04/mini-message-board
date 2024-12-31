const db = require('../db/queries');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function messageListGet(req, res) {
  const messages = await db.getAllMessages();

  res.render('index', { messages });
}

async function messageDetailsGet(req, res) {
  const message = await db.getMessageById(req.query.id);

  if (!message) throw new CustomNotFoundError('Message not found');

  res.render('messageDetails', {
    username: message.username,
    text: message.text,
    date: message.date,
  });
}

async function newMessagePost(req, res) {
  const { text, username } = req.body;
  await db.insertMessage(text, username);

  res.redirect('/');
}

async function deleteAllMessages(req, res) {
  await db.deleteAllMessages();
  res.redirect('/');
}

module.exports = {
  messageListGet,
  messageDetailsGet,
  newMessagePost,
  deleteAllMessages,
};
