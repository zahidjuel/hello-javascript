/* 
১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে।  

*/

var myName = 'Zahid Juel'; // string variable
var isHappy = true; // boolean variable
let number = 45; // numeric variable
const author = 'Jhankar Mahbub'; // string variable

/* 
২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে  

*/

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('');

/* 
৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

*/

for (let i = 50; i <= 80; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log('');

/* 
৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো

*/

function addNumber(num1, num2, num3) {
    let addition = num1 + num2 + num3;
    console.log(addition);
}

addNumber(20, 24, 16);
addNumber(45, 15, 25);

console.log('');

/* 
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। 
তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

*/

function convertCelciusToFahrenheit(celciusTemperature) {
    let fahrenheit = ((9 * celciusTemperature) / 5) + 32;
    return fahrenheit;
}

let celcius = 98.4;
let fahrenheitTemperature = convertCelciusToFahrenheit(celcius);
console.log(fahrenheitTemperature);

console.log('');

/* 
২. একইভাবে উল্টা হিসাব করবে। 
যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।  

*/

function convertFahrenheitToCelcius(f) {
    let c = (5 * (f - 32)) / 9;
    console.log(parseFloat(c.toFixed(3)));
}

convertFahrenheitToCelcius(209.12);
convertFahrenheitToCelcius(273);


console.log('');

/* 
৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। 
তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

*/

function findGpa(marks) {
    if (marks < 0 && marks > 100) {
        console.log(marks, 'is Not Spported !');
    }

    else if (marks >= 80 && marks <= 100) {
        console.log(marks, 'is A+');
    }

    else if (marks >= 70 && marks < 80) {
        console.log(marks, 'is A');
    }

    else if (marks >= 60 && marks < 70) {
        console.log(marks, 'is A-');
    }

    else if (marks >= 50 && marks < 60) {
        console.log(marks, 'is B');
    }

    else if (marks >= 40 && marks < 50) {
        console.log(marks, 'is C');
    }

    else {
        console.log(marks, 'is fali');
    }

}

findGpa(10);
findGpa(45);
findGpa(59);
findGpa(70);
findGpa(60);
findGpa(85);

console.log('');


