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
  res.json(peeps);
});

app.post('/peeps', (req, res) => {
  peeps.push(req.body.peep)
  res.json(peeps);
});

app.listen(PORT);

const PeepsModel = require('../src/peepsModel');
const PeepsView = require('../src/peepsView');
const PeepsClient = require('../src/peepsClient');

const client = new PeepsClient();
const model = new PeepsModel();
const view = new PeepsView(model, client);

document.querySelector('#add-peep-btn').addEventListener('click', async () => {
  const newPeep = document.querySelector('#add-peep-input').value;
  await view.client.createPeep(newPeep);
  await view.displayPeepsFromApi();
});
