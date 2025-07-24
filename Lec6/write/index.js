const fs = require('fs');
fs.writeFile("../demo.txt","g26 hello",function(err){
    if(err) return console.error(err);
    console.log("File written successfully!");
})
fs.writeFile("../demo2.txt","I am demo2 file",function(err){
    if(err) return console.error(err);
    console.log("File written successfully!");
})