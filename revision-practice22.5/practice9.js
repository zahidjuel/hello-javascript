/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। 
সেটা রেগুলার for লুপ হোক বা for of হোক। 
হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  

*/
const arr = [10, 12, 23, 45, 34, 23, 21, 45, 67, 89, 90];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('');

for (const i of arr) {
    console.log(i);
}