// Find the cheapest phone from an array of phone objects

const mobile = [
    { brand: 'Samsung', camera: 20, storage: '32gb', price: 22990, color: 'black' },
    { brand: 'Xaoumi', camera: 48, storage: '16gb', price: 29990, color: 'red' },
    { brand: 'Lava', camera: 8, storage: '2gb', price: 9990, color: 'white' },
    { brand: 'vivo', camera: 16, storage: '8gb', price: 12990, color: 'blue' },
    { brand: 'Iphone', camera: 7, storage: '80gb', price: 112990, color: 'purple' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    let i = 0;
    while (i < phones.length) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
        i++;
    }

    return cheapest;
}

const mySelection = cheapestPhone(mobile);
console.log(mySelection);

console.log(mobile[3].price);