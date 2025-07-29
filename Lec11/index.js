//Client side
// accessing dom Element
//1. using Id
//2. using class
//3. using tag name
// 4. using querySelector

// let el1 = document.getElementById("heading");
// console.log(el1);
// let el2 = document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3 = document.getElementsByTagName("p");
// console.log(el3[0]);
let el4 = document.querySelector("p");
let el5 = document.querySelector(".item");
let el6 = document.querySelectorAll(".item");
let ul = document.querySelector("#container");
console.log(el4);
console.log(el5);
console.log(el6);

//properties
/*
innerText
innerHTML
textContent
*/
let data = el4.innerText;
console.log(data);
el4.innerText = "Hello World";
let data2 = ul.innerHTML;
console.log(data2);
console.log(data3);
console.log(data4);
ul.innerHTML = `<li class = "item">Item 4</li>
                <li class = "item">Item 5</li>
                <li class = "item">Item 6</li>`;

/*
getAttribute
setAttribute
classList
*/