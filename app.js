const express = require('express');
const indexRouter = require('./routers/indexRouter');
const path = require('node:path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', (req, res) => res.render('form'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () =>
  console.log(`Server running - listening on port ${PORT}`)
);
