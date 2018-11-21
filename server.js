const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname, 'public')
const app = express()
const helmet = require('helmet')

app.use(helmet({
  frameguard: false
}))

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`)
})
