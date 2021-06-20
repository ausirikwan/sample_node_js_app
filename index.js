
var express=require("express");
var app=express();
var port=process.env.PORT || 3000;



app.get(_baseurl + '/', async function (req, res, next) {
  res.send("hello");
});


app.get('/testapi', (req, res) => {
  res.json({"detail":"Hello world"})
})

app.post('/auapi', (req, res) => {
  res.json({"message":"Hello world"})
})

app.listen(port);
