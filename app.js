import express from 'express';
import { Peep } from './modules/peep.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Chitter frontend running on http://localhost:${port}`)
})



