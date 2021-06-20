const express = require('express')
const app = express()

app.get(_baseurl + '/', async function (req, res, next) {
  res.send("hello");
});


app.get('/testapi', (req, res) => {
  res.json({"detail":"Hello world"})
})

app.post('/auapi', (req, res) => {
  res.json({"message":"Hello world"})
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
