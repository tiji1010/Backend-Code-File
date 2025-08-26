const express = require("express");
const { m1, m2 } = require("../middleware/firstmiddleware");
const app =express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extented:true}))
app.use(m1)
app.use(m2)
app.get("/health",(req,res)=>{
    console.log("running controller function")
    res.json({
        status:"ok",
        message:"server running ok"
    })
})



app.listen(5775,()=>{
    console.log("server started")
})