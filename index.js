
var express=require("express");
var app=express();
var port=process.env.PORT || 3000;
var path    = require("path");

app.use(express.static('public'));

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+'/public/index.html'));

});


app.get('/testapi', (req, res) => {
  let _param1 = req.query.wording
  res.json({"detail":"คุณพูดว่า " +_param1})
})

app.post('/auapi', (req, res) => {
  res.json({"message":"Hello world"})
})

app.listen(port);
