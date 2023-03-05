const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

let peeps = [
  'This peep is coming from the server'
];

app.get(/peeps, (req, res) => {
  res.send(JSON.stringify(peeps));
});

app.listen(PORT);