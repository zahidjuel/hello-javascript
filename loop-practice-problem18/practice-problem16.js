/* 
practice problem 1: 
Harry's mom gave him money & asked him to some buy oranges and appels.
write a pogramm to help harry calculate how much money the shopkeeper will return.

The first line of the input is the taka Harry's mom gave him.
The second line is the cost of 1 kg oranges & 1 kg apples.

Print the giveBack result:

sample Input : 
100
700

Output:
300

*/

var givenMoney = 1000;
var applePrice = 300;
var orangePrice = 400;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var givenBack = givenMoney - totalPrice;
console.log(givenBack);

/*
Problem 2:
Print The Average marksResult in 2 decimal places.

sample input: 
75.25, 65, 80, 35.45, 99.50
 
Output:
71.04 ( 2 decimal places)
*/

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var averageMarks = totalMarks / 5;
console.log(totalMarks);
console.log(parseFloat(averageMarks.toFixed(2))); // convert string to float number use parseFloat();]

/*
problem : 3 
Print the result in one line

sample input:
I am going to be 
an awesome web developer

output:
I am going to be an awesome web developer
*/

var firstLine = 'I am going to be'
var secondLine = 'an awesome web developer'
var oneLine = firstLine + ' ' + secondLine;
console.log(oneLine);


/* 
problem 4 :
Print the remainder

sample input: 
number = 119;
divided the number by 5.

Ouput:

4

*/

var number = 119;
var dividedNumber = 5;
var remainder = number % dividedNumber;
console.log(remainder);

console.log
