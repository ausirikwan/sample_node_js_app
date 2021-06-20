const express = require('express')
const app = express()

app.get('/testapi', (req, res) => {
  res.json({"detail":"Hello world"})
})

app.post('/auapi', (req, res) => {
  res.json({"message":"Hello world"})
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
