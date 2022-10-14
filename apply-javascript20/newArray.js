/*
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. 

*/
function findOddSum(array) {
    let oddArray = [];
    let oddArraySum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            oddArray.push(array[i]);
            oddArraySum = oddArraySum + array[i];
        }
    }
    const obj = {
        newArray: oddArray,
        arraySum: oddArraySum,
    }
    return obj;
}

let givenArray = [5, 7, 8, 10, 45, 30];
let result = findOddSum(givenArray);
console.log(result);