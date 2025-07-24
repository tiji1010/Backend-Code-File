const fs = require('fs');
const { resolve } = require('path');
console.log("Start");
setTimeout(() => {
  console.log("Timer callback");
}, 0);
setImmediate(() => {
  console.log("Immediate callback");
});

function dosometask(){
  return new Promise((resolve,reject)=>{
    resolve("promise chia");
  })
}

fs.readFile("demo.txt", "utf-8", (err, data) => { 
  console.log("poll phase callback");
  setTimeout(() => {
    console.log("Timer callback inside readFile");
  }, 0);
  setImmediate(() => {
    console.log("Immediate callback inside readFile");
  });
});
console.log("End");
dosometask().then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})
process.nextTick(()=>{
  console.log("next tick");
})
