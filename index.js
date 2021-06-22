var port = process.env.PORT || 3000;
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello")
})

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


app.listen(port);
