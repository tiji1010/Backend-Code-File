//A Promise is an object that represents the eventual completion (or failure) of an asynchronous  operation and its resulting value.
let product = [{
    name : "samsung",
    amount : 70000,
    quantity : 10
},
{
    name: "iphone",
    amount : 100000,
    quantity : 0
}];

let available_amount = 200000;

function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        let isproduct = product.filter((p) => p.name == product_name)[0];
        if (!isproduct) {
            reject("Product not found");
            return;
        }
        if (isproduct.quantity <= 0) {
            reject("Product out of stock");
            return;
        }
        resolve(isproduct.amount);
    });
}

function deductbankamount(amount) {
    return new Promise((resolve, reject) => {
        if (amount > available_amount) {
            reject("Insufficient bank balance");
        } else {
            available_amount -= amount;
            console.log("Availaible amount:", available_amount);
            resolve("amount deducted");
        }
    });
}

// Usage example:
buyProduct("samsung")
    .then(amount => {
        console.log("Cost of device:", amount);
        return deductbankamount(amount);
    })
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });

