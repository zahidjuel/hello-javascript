/* ১. 
একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  

*/

function multiplicationTable(number) {
    let response = '';
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        response = response + `${number} * ${i} = ${result}\n`;
        // console.log(response);
    }
    return response;
}
// multiplicationTable(13);
let table = multiplicationTable(12);
console.log(table);


/* ২. 
একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার 
কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। 
 
*/
let myGreeting = 'HEY THERE!';
console.log(myGreeting.toLowerCase());

let myName = 'zahid juel';
console.log(myName.toUpperCase());

function upperCaseToLowerCase(countryName) {
    let lowerCase = countryName.toLowerCase();
    return lowerCase;
}

let regularCase = "InDIa";
let regularCaseToLowerCase = upperCaseToLowerCase(regularCase);
console.log(regularCaseToLowerCase);

/* ৩. 
fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং 
তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ 
জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu 
এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।
 
*/

function fullName(firstName, lastName) {
    const fName = firstName + " " + lastName;
    return fName;
}
const myNames = fullName('Hablo', 'Kanto');
console.log(myNames);
/* 
৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে 
সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
 
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 
 
*/

function squareNumber(num) {
    const square = num * num;
    return square;
}

const squareOfNumber = squareNumber(7);
console.log(squareOfNumber);

/* ৫) 
 
pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
 
 
 
const pizza = {
 
 toppings: ['cheese', 'sauce', 'pepperoni'],
 
 crust: 'deep dish',
 
 serves: 2
 
}
 
এবং pepperoni প্রিন্ট করবা। 
 
*/

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2,
}

console.log(pizza.toppings[2]);
console.log(pizza.crust);
console.log(pizza.serves);

console.log(Object.keys(pizza));
console.log(Object.values(pizza));
