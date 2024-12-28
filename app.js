const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', (req, res) => res.send('Homepage'));
app.use('/new', (req, res) => res.send('New message'));

app.listen(PORT, () =>
  console.log(`Server running - listening on port ${PORT}`)
);
