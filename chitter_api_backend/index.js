const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors())

let peeps = [
  'This peep is coming from the server'
];

app.use(express.json());

app.get('/peeps', (req, res) => {
  res.send(JSON.stringify(peeps));
});

app.listen(PORT);