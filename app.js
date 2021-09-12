import express from 'express';
import { Peep } from './modules/peep.js'
import { PeepCollection } from './modules/peepCollection.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')

    const peepsByKay = new PeepCollection("handle", "kay");
    
    peepsByKay.refresh().then(() => console.log(peepsByKay.all))
})

app.listen(port, () => {
  console.log(`Chitter frontend running on http://localhost:${port}`)
})
