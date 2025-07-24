const fs = require('fs');
fs.readFile('../users.txt', 'utf8', function(err, data) {
    if (err) return console.log(err);
    // console.log(data);
    let users = JSON.parse(data);
    console.log(users[0]); 
});