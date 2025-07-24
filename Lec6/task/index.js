const fs = require('fs');

fs.readFile('../demo.txt', 'utf8', function(err, data1){
    if (err) return console.error(err);
fs.readFile('../demo2.txt', 'utf8', function(err, data2){
    if (err) return console.error(err);
    const combined = data1 + '\n' + data2;
fs.writeFile('../new.txt', combined, (err) => {
    if (err) return console.error(err);
        console.log('done');
        });
    });
});