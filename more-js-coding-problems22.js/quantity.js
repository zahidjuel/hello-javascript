//Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    { name: 'shirt', price: 1150, quantity: 2 },
    { name: 'pant', price: 650, quantity: 2 },
    { name: 'belt', price: 450, quantity: 1 },
    { name: 'shoe', price: 1550, quantity: 3 },
]

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const cost = product.price * product.quantity;
        sum = sum + cost;
    }
    return sum;
}

const TotalCost = totalCost(shoppingCart);
console.log(TotalCost);