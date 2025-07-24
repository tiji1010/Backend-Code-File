const fs = require('fs');

fs.readFile('../users.txt', 'utf8', function(err, data1){
    if (err) return console.error(err);
    let users1 = JSON.parse(data1);
fs.readFile('../users1.txt', 'utf8', function(err, data2){
    if (err) return console.error(err);
    let users2 = JSON.parse(data2);
    const combined = data1 + '\n' + data2;
fs.writeFile('../new.txt', combined, (err) => {
    if (err) return console.error(err);
        console.log('done');
        });
    });
});