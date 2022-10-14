// 1. with temp variable
let first = 5;
let second = 7;

const temp = first; // 5
first = second; // 7
second = temp; // 5

console.log(first, second);

// 2. without temp variable

let num1 = 20;
let num2 = 45;

num1 = num2; // 45
num2 = num1 - 25; // 20
console.log(num1, num2);

// 3. use array destructing

let n1 = 40;
let n2 = 60;

[n1, n2] = [n2, n1]
console.log(n1, n2);


