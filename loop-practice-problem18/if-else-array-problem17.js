
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
???????????????????????? ??????????????????????????? -???:  

??????????????? ??????????????? ?????? ?????????????????? ?????????????????? ??? ???????????? ????????????????????? ??????????????? 
??????????????? ??????????????? ???????????????, ??????????????????, ??????????????????, ??????????????????, ?????????????????? ?????? ??????????????????????????? - ??????????????? grade ???????????? ???????????? ????????? 
????????? ??????????????? ??????????????? ????????????. ?????????????????? 95 ?????????????????????, ?????????????????? 66 ?????????????????????,
?????????????????? 80 ?????????????????????, ?????????????????? ????????????????????? 59, ?????????????????? ????????????????????? 47, ??????????????????????????? ????????????????????? 77???
???????????? JS code ???????????? ??????????????? grade ????????? ????????? ???????????? ????????????????

???) ???????????? ?????? ?????? ???????????? ??????????????????, ??????????????? grade F.

???) ???????????? ?????? ?????? ????????? ???????????? ??????????????????, ???????????? ?????? ?????? ???????????? ??????????????????, ??????????????? grade D.

???) ???????????? ?????? ?????? ????????? ???????????? ??????????????????, ???????????? ?????? ?????? ???????????? ??????????????????, ??????????????? grade C.

???) ???????????? ?????? ?????? ????????? ???????????? ??????????????????, ???????????? ?????? ?????? ???????????? ??????????????????, ??????????????? grade B.

???) ???????????? ?????? ?????? ????????? ???????????? ??????????????????, ???????????? ?????? ?????? ???????????? ??????????????????, ??????????????? grade A.

???) ???????????? ?????? ?????? ????????? ???????????? ??????????????????, ??????????????? grade A+.
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
???????????????????????? ????????????????????????-???: 
 
???????????????????????? ????????? ????????????????????? ???????????? ????????? ???????????? ?????????????????? ?????????????????? ????????? ?????????????????? ???????????? ???????????????, ????????????????????? ???????????????????????? ????????? ????????? 
?????? ???????????????????????? ????????? ???????????? ?????????????????? ????????? ?????????????????? ?????????????????? ??????, ??????????????? ????????????????????? ????????? ??????????????? 
????????? ???????????? ?????? ?????? ??????????????? ??????????????? ???????????? ??????????????? ??????????????? 
?????? ????????? ????????????????????? ???????????????????????? ??????????????? ?????? ??????????????? ??????????????? ?????????????????? ????????? ???????????? ??????????????? ????????? ???????????? ????????? ???????????? ??????????????? 
?????????????????? ???????????? signal ???????????? ???????????? ???????????????????????? ?????????????????? ??????????????? ????????? green, yellow ?????? red ????????? ???????????????
????????? ????????????????????? ??????????????????????????? ??????????????????????????? ????????? ????????????
??????, ????????? ????????? ??????????????? ???????????? ??????????????? 

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
???????????????????????? ???????????????????????????-???

???????????????????????? ??????????????? ????????? ??????? 

???) ????????? 9 ?????? ???????????? ??????????????? ???????????? ?????????  

???) ??????????????? ??????????????? ???????????? ???????????? ???????????????????????? ?????????

???) ??????????????? ??????????????? ??????????????? ???????????? ????????? 

???) ??????????????? ????????? ????????? ???????????? ??????????????? ???????????? ???????????? ???????????????????????? ????????? 

???) ????????? ???????????? ??????????????? ?????? ??????????????? (?????????????????? ????????? ???????????? ?????????????????? ?????????????????? ???????????? ???????????? ????????? ), ????????????????????? ??????????????? ???????????? ????????? 

????????? ??????????????? ????????? ??????????????? ???????????? for ????????? ?????? ????????? ?????????????????? ??????????????? ??????????????????????????? ?????????????????? ?????????????????? ????????????????????? 

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