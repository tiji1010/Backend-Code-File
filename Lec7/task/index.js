const fs = require('fs');
let users = [
    {
        name : "Gaurish",
        age : 20,
        address : "Delhi"
    },
    {
        name : "Yug",
        age : 22,
        address : "Mumbai"
    }
]
fs.writeFile('../users1.txt',JSON.stringify(users),function(err) {
    if (err) return console.log(err);
    console.log('done');
});