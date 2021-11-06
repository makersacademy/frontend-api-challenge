const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index')
});

app.listen(
  port,
  () => console.log(`Server listening on http://localhost:${port}`)
);
