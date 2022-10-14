// ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায়
var myName;
console.log(typeof myName);

var myName1 = '';
console.log(myName1);
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;
console.log(person);
console.log(typeof person);

if (true) {
    console.log('I am in love with Pinki !!!')
}
else if (true) {
    console.log('I am in love with coding !!')
}

else {
    console.log('Breakup !!!');
}

const arr1 = [3, 4, 5, 7, 0, 10, 1, 2, 6, 8, 9, 15, 20, 18, 17, 19, 11, 12, 13, 14, 16];
arr1.reverse();
console.log(arr1);
console.log(arr1.toString());
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
console.log(array1.join(''));

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseFloat(sum));

var num5 = 10;

switch (num5) {
    case 10:
        console.log("hello");
        break;
    case 5:
        console.log("hoiceee");
        break;
    default:
        console.log('Not match number');
}
