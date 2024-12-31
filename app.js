require('dotenv').config();
const express = require('express');
const indexRouter = require('./routers/indexRouter');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () =>
  console.log(`Server running - listening on port ${port}`)
);
