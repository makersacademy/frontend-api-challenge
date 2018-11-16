const path = require('path')
const express = require('express')
const PORT = 3000
const publicPath = path.join(__dirname, 'public')
const app = express()

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`)
})
