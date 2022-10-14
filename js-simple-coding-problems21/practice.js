/* 
১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।  

*/
const arr1 = [450, 46, 67, -6, -43, -89, 56, 45, 87, 8, 24, 145, -7];
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

console.log('');

function getMin(numbers) {
    let minValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i];
        }
    }
    return minValue;
}

const arr2 = [450, 46, 67, -6, -43, -89, 56, 45, 87, 8, 24, 145, -7];
const min_value = getMin(arr2);
console.log(min_value);

/* 
২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 

*/


let a = 3, b = 9, c = 8;
if (a == b && b == c && c == a) {
    console.log('The numbers are equal');
}

else if (a <= b && a <= c) {
    console.log(a, " is the smallest");

}
else if (b <= a && b <= c) {
    console.log(b, " is the smallest");
}
else {
    console.log(c, 'is the smallest');
}


/* ৩. 

একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। 
সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। 
সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। 
একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  

*/
function make_Avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    let avg = sum / numbers.length;
    return parseFloat(avg.toFixed(2));
}

const arr3 = [450, 46, 67, -6, -43, -89, 56, 45, 87, 8, 24, 145, -7];
const avgValue = make_Avg(arr3);
console.log(avgValue);

console.log('');

/* ৪. 
একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। 
তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

*/
function areaOfRectangle(length, height) {
    let area = 2 * (length + height);
    return area;
}

let l = 5, h = 6;
const area_ = areaOfRectangle(l, h);
console.log('Area of Rectangle = ', area_);

/* ৫. 
(ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। 
সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। 
দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  

*/

function secondLargestNumber(numbers) {
    let largest = numbers[0];
    let secondLargest = numbers[1];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest; // 87
            largest = numbers[i]; // 145
        }
        if (numbers[i] < largest && numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }
    return {
        maximumNumber: largest,
        secondMaximumNumber: secondLargest,
    }
}

const arr4 = [345, 146, 67, -6, -43, -89, 56, 45, 87, 8, 24, 145, -7];
const result = secondLargestNumber(arr4);
console.log(result);