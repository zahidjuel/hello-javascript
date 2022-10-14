//Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    { name: 'shirt', price: 1150 },
    { name: 'pant', price: 650 },
    { name: 'belt', price: 450 },
    { name: 'shoe', price: 1550 },
]

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i].price;
        sum = sum + product;
    }
    return sum;
}

const TotalCost = totalCost(shoppingCart);
console.log(TotalCost);