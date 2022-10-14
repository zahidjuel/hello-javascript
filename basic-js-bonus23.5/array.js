const products = [
    { name: 'phone', price: 12250 },
    { name: 'laptop', price: 132250 },
]
console.log(products[0]);
console.log(products[1]);
console.log(products[1].price);

const product = [
    {
        '0': 14,
        '1': 15,
        '2': 16,
    }
]
console.log(product);
console.log(product[0]);
console.log(product[0][0]);

const num = [1, 2, 3, 4, 5];
console.log(Array.isArray(num));