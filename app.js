const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port = 300;

app.get('/', (req, res) =>{
  res.send("soham");
});

app.listen(port,function(){
  console.log("connected to port " + port);
});