/*
 Write a function that will take feet as the input parameter and will convert 
it into inch and will return the result in inch. 

*/
function feetToInch(feet) {
    const inchValue = feet * 12;
    return inchValue;
}

const result1 = feetToInch(1);
const result2 = feetToInch(3);
const result3 = feetToInch(1.5);
console.log(result1);
console.log(result2);
console.log(result3);