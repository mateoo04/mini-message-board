const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => res.render('index', { messages }));
indexRouter.get('/message', (req, res) => {
  const message = messages.find(
    (message) => message.id === Number(req.query.id)
  );
  res.render('messageDetails', {
    id: message.id,
    user: message.user,
    text: message.text,
    added: message.added,
  });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    id: Math.max(...messages.map((message) => message.id)) + 1,
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
