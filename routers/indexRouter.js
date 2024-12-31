const { Router } = require('express');
const messagesController = require('../controllers/messagesController');

const indexRouter = Router();

indexRouter.get('/', messagesController.messageListGet);
indexRouter.get('/message', messagesController.messageDetailsGet);

indexRouter.get('/new', (req, res) => res.render('form'));
indexRouter.post('/new', messagesController.newMessagePost);

indexRouter.get('/delete', messagesController.deleteAllMessages);

module.exports = indexRouter;
