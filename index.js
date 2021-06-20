
var express=require("express");
var app=express();
var port=process.env.PORT || 3000;
var path    = require("path");

app.use(express.static('public'));



app.get('/testapi', (req, res) => {
  let _param1 = req.query.wording
  _param1 = _param1 ==null ? '' : _param1
  res.json({"detail":"คุณพูดว่า " +_param1})
}) 

app.post('/auapi', (req, res) => {
  res.json({"detail":"Hello world"})
})

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+'/public/index.html'));

});


app.listen(port);
