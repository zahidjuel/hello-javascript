/* 
১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। 
এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
*/
const mobile = {
    brand: 'Samsung',
    price: 12290,
    storage: '32gb',
    color: 'purple',
}

mobile.brand = 'Xaoumi';
mobile['price'] = 17770;
console.log(mobile);