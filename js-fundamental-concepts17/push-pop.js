// use push to add an element to an array as the last element array

var number = [23, 45, 67, 78]
console.log(number);
number.push(45);
number.push(34);
console.log(number);

var myHeart = ['Piku', 'Moni', 'Sundori'];
console.log(myHeart);
myHeart.push('Fulkoli');
myHeart.push('Rupkotha');
console.log(myHeart);
console.log(myHeart.length);
console.log(myHeart.indexOf('Piku'));

// use pop to remove last element an array

number.pop();
console.log(number);




myHeart.pop();
myHeart.pop();
console.log(myHeart);


// remove element
var age = [78, 45, 98, 45];
console.log(age);
var removeElement = age.pop();
console.log(age);
console.log(removeElement);

// add first element an array
var countryName = ['Bangladesh', 'India', 'Pakistan', 'Afgahnistan'];
console.log(countryName);

var addCountryName = countryName.unshift('Srilanka');
console.log(countryName);

// remove first element

var penPrice = [12, 5, 7, 10];
console.log(penPrice);
var removeFirstArray = penPrice.shift();
console.log(penPrice);
console.log(removeFirstArray);
