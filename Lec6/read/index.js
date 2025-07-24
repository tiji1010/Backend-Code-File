const fs = require('fs');
fs.readFile("../demo.txt", "utf8", function(err, data) {
    if (err) return console.log(err);
    console.log("File content:", data);
});
fs.readFile("../demo2.txt", "utf8", function(err, data) {
    if (err) return console.log(err);
    console.log("File content:", data);
});