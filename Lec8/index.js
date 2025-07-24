const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    // res.send("Hello"); //can send string and html also and response header set hoke jata hai 

//   res.sendFile(__dirname + '/index.html');

//   res.json({
//     name: 'Vansh',
//     age: 20,
//   })
res.end("hi"); //can only send string and response header set nahi hoga
  
});

//path-variable
//1. query parameter
app.get('/watch', (req, res) => {
  let  videoId = req.query.v;
  let nId = req.query.n;
  res.send("got it" + " " + videoId + " " + nId);
});
//2. params
app.get('/watch/:v/video/:n', (req, res) => {
    
    console.log(req.params.v);
    console.log(req.params.n);
    res.send("got it !!!"); 
});


app.listen(3000, function() {
  console.log('server started');
});