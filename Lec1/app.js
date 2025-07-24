const fs = require('fs');

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}   
function multiply(a, b) {
  return a * b;
}
fs.readFile("demo.txt", "utf-8", (err,data)=>{
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
  console.log(data);
});
add(2, 3);
subtract(5, 2);
multiply(4, 3);
console.log("exit");