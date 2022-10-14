// Find the matching product by searching products
const numbers = [45, 56, 78, 80, 54, 23];

/* for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
 */

/* // for of loop simplified version
for (const number of numbers) { // using loop through
    console.log(number);
} */

const products = [
    { id: 1, name: 'xaoumi phone one night', price: 19990 },
    { id: 2, name: 'iphone', price: 129990 },
    { id: 3, name: 'mack book air', price: 139990 },
    { id: 4, name: 'lenovo yoga laptop 2025', price: 79990 },
    { id: 5, name: 'Dell inspiron laptop', price: 56990 },
    { id: 6, name: 'Samsung phone note 7', price: 25990 },
    { id: 7, name: 'Nokia old age phone gone', price: 17790 },
    { id: 8, name: 'one plus Phone 9r', price: 37790 },
]

function matchedProducts(gadgets, search) {
    const matched = [];
    const unMatched = [];
    for (const gadget of gadgets) {
        if (gadget.name.toLowerCase().includes(search.toLowerCase()) == true) {
            matched.push(gadget);
        }
    }

    return matched;
}
console.log(matchedProducts(products, 'Phone'));
console.log(matchedProducts(products, 'laptop'));
console.log(matchedProducts(products, 'bd')); // unmatched

