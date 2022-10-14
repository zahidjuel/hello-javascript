
/* 
problem : 1  

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of 'Banana'and replace 'Banana' with 'Mango'.
b) Remove 'Orange' and add 'watermelon'.

 */

var fruits = ['Apple', 'Banana', 'Orange'];

var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);

fruits[1] = 'Mango';
console.log(fruits[1]);
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);


/* 
problem : 2
write a program to find your and your friends grades using if-else.

sample input:

marks your & your friends :
juel = 85, Tom = 66, Jenne = 95, peter = 56, john = 40.

grade chart: 

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less <= F grade

*/

var marks = 105;

if (marks > 100 || marks < 0) {
    console.log('Not Supported!!!');
}
else if (marks == 80 || (marks > 80 && marks <= 100)) {
    console.log('A - Grade');
}
else if (marks == 60 || (marks > 60 && marks < 80)) {
    console.log('B - Grade');
}
else if (marks == 50 || (marks > 50 && marks < 60)) {
    console.log('C - Grade');
}
else if (marks == 40 || (marks > 40 && marks < 50)) {
    console.log('D - Grade');
}
else if (marks == 39 || (marks < 39 && marks >= 10)) {
    console.log('F - Grade');
}
else {
    console.log('Red zone a student. 100 % Fail !!!');
}

/* 
problem :3  
Print the largest number using if-else

sample input:
13, 79, 45

Output:
79
*/
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log('Largest number = ' + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log('Largest number = ' + num2)
}
else if (num3 > num1 && num3 > num2) {
    console.log('Largest number= ' + num3);
}
else {
    console.log('The numbers are equal !!!');
}

/*
problem :3  
Print the largest number using nested if-else

sample input:
13, 79, 45

Output:
79 
*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('Largest number = ' + num1);
    }
    else {
        console.log('Largest number = ' + num3);
    }
}
else if (num2 > num3) {
    if (num2 > num1) {
        console.log('Largest number = ' + num2);
    }
    else {
        console.log('Largest number = ' + num1);
    }
}
else if (num3 > num1) {
    if (num3 > num2) {
        console.log('Largest number = ' + num3);
    }
    else {
        console.log('Largest number = ' + num2);
    }
}
else {
    console.log('The numbers are equal !!!');
}

/* 
problem: 3  
Print the largest number using nested if-else

sample input:
13, 79, 45

Output:
79
*/

var num1 = 14;
var num2 = 15;
var num3 = 16;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('Largest number = ' + num1);
    }
    else {
        console.log('Largest number = ' + num3);
    }
}
else {
    if (num2 > num3) {
        console.log('Largest number = ' + num2);
    }
    else if (num3 > num2) {
        console.log('Largest number = ' + num3);
    }
    else {
        console.log('The numbers are equal !!!');
    }
}

/* 
problem : 4
write a program to check whether a triangle is isosceles or not using if-else.

Input :
side1 = 9;
side2 = 9;
side3 = 9

output : 
Triangle is Isosceles

*/

var side1 = 1;
var side2 = 2;
var side3 = 3;

if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) {
    console.log("This is a triangle");
}
if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
    console.log("This is not a triangle !!!");
}
if (side1 === side2 && side2 === side3) {
    console.log('The Triangle is equilateral');
}
else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("The Triangle is Isosceles");
}

else {
    console.log("The triangle is scalene");
}

/*
প্রাকটিস চ্যালেঞ্জ -১:  

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। 
তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। 
তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে,
সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77।
তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
*/

var marks = 59;

if (marks > 100 || marks < 0) {
    console.log("Not Supported !!");
}
else if (marks < 50 && marks >= 0) {
    console.log('Grade __ F');
}
else if (marks >= 50 && marks < 60) {
    console.log('Grade __ D');
}
else if (marks >= 60 && marks < 70) {
    console.log('Grade __ C');
}
else if (marks >= 70 && marks < 80) {
    console.log('Grade __ B');
}
else if (marks >= 80 && marks < 90) {
    console.log('Grade __ A');
}
else {
    console.log('Grade A+');
}

/*
প্রাকটিস প্রব্লেম-২: 
 
তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। 
এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। 
যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। 
আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। 
যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে।
সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে।
তো, সেই কোড ফটাফট লিখে ফেলো। 

*/

var signal = 'green';

if (signal == 'green') {
    console.log('You should cross the road');
}
else if (signal == 'red') {
    console.log('You should stop now');
}
else if (signal == 'yellow') {
    console.log('You should waiting few minuties.');
}

console.log('');

/*
প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত 9 টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

*/
arr = ["Unlock the module at 9 PM",
    "Practice by watching the video quickly",
    "Take notes while watching the video",
    "After completing the module, practice the whole module by yourself",
    "If you don't understand something (think about it but there is a condition), join the support session"
]
for (var i = 0; i < 10; i++) {
    var index = i % 5
    console.log(+ (index + 1) + ' ) ' + (arr[index]));
}

console.log(0 % 5);
console.log(1 % 5);
console.log(2 % 5);
console.log(3 % 5);
console.log(4 % 5);
console.log(5 % 5);
console.log(6 % 5);
console.log(7 % 5);
console.log(8 % 5);
console.log(9 % 5);

var num = 0;
while (num < 10) {
    var index1 = num % 5;
    console.log(+ (index1 + 1) + ' ) ' + (arr[index1]));
    num++;
}

var num2 = 9;
while (num2 >= 0) {
    var index2 = num2 % 5;
    console.log(+ (index2 + 1) + ' ) ' + (arr[index2]));
    num2--;
}

console.log('reverse decremental way using for loop');


for (var j = 9; j >= 0; j--) {
    var positionIndex = j % 5;
    console.log(+ (positionIndex + 1) + ' ) ' + (arr[positionIndex]));
}