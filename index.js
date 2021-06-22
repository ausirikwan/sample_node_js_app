const express = require('express')
const app = express()

app.get('/testapi', (req, res) => {
  res.json({"detail":"Hello world"})
})

app.get('/newcustomer', (req, res) => {
    res.json({"iscustomer":"false"})
})

app.get('/existingcustomer', (req, res) => {
    res.json({"iscustomer":"true"})
})

app.get('/vaccined', (req, res) => {
    res.json({"isvaccined":"true"})
})

app.get('/vaccine', (req, res) => {
    res.json({"isvaccined":"false"})
})




app.listen(3000, () => {
  console.log('Start server at port 3000.')
})