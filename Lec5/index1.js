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

async function buyProduct(product_name) {
    let isproduct = product.filter((p) => p.name == product_name)[0];
    if (!isproduct) {
        throw "Product not found";
    }
    if (isproduct.quantity <= 0) {
        throw "Product out of stock";
    }
    return isproduct.amount;
}

async function deductbankamount(amount) {
    if (amount > available_amount) {
        throw "Insufficient bank balance";
    } else {
        available_amount -= amount;
        console.log("Availaible amount:", available_amount);
        return "amount deducted";
    }
}

// Usage example with async/await:
async function purchaseFlow() {
    try {
        const amount = await buyProduct("samsung");
        console.log("Cost of device:", amount);
        const msg = await deductbankamount(amount);
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

purchaseFlow();