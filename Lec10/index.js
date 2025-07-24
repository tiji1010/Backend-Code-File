// static file kya hoti hai kya bhejti hai
const express = require('express')
const app = express()
app.use(express.static(__dirname+ "/public"))

// app.get("/" , (req,res)=>{
//     res.sendFile(__dirname+"/index.html")

// })
// app.get ("/about " ,(req,res)=>{
//     res.sendFile(__dirname+ "/about.html")

// })
// app.post()
app.listen(3000 ,function(){
    console.log("server started")
})