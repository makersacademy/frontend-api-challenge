import express from 'express';
import { Peep } from './public/js/peep.js'
import { PeepCollection } from './public/js/peepCollection.js'

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`Chitter frontend running on http://localhost:${port}`)
})

