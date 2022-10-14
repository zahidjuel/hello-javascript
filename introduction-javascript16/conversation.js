var price1 = 20;
var price2 = 30;

var totalPrice = price1 + price2;

console.log(totalPrice);

var firstName = "Pinkey";
var lastName = "Chowdhury";
var fullName = firstName + ' ' + lastName; // string concatenation
console.log(fullName);

//concatenation

var bananaPrice = '10';
var mangoPrice = '45';
var totalCost = bananaPrice + ' ' + mangoPrice;
console.log(totalCost);

var age = '22';
firstName = 'Zahid';
lastName = 'Juel';

var personAge = firstName + ' ' + lastName + ' ' + '(' + age + ')';
console.log(personAge);

var num1 = 23;
var num2 = '3';
var totalNum = num1 + num2;
console.log(totalNum);
totalNum = num1 + parseInt(num2); // convert num2 string to number
console.log(totalNum);

// convert string to number
var num3 = '67';
console.log(num3);
num3 = parseInt(num3);
console.log(num3);

var gpa = '3.67';

gpa = parseFloat(gpa);
console.log(gpa);