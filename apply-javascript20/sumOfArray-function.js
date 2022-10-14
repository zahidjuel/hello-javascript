//Get Odd Numbers of an array and get odd Sum of an array

function sumOfArrayNumber(arrayNumber) {
    let sumOfArray = 0;
    let oddArray = [];
    let evenArray = []
    let sumofOddArrayNumber = 0;
    let sumOfEvenArrayNumber = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        sumOfArray = sumOfArray + arrayNumber[i];
        if ((arrayNumber[i] % 2) != 0) {
            oddArray.push(arrayNumber[i]);
            sumofOddArrayNumber = sumofOddArrayNumber + arrayNumber[i];
        }
        else {
            evenArray.push(arrayNumber[i]);
            sumOfEvenArrayNumber = sumOfEvenArrayNumber + arrayNumber[i];
        }
    }
    console.log('arrayNumber = ', arrayNumber);
    console.log("oddArray = ", oddArray);
    console.log('sumofOddArray = ', sumofOddArrayNumber);
    console.log("evenArray = ", evenArray);
    console.log("sumOfEvenArray = ", sumOfEvenArrayNumber);

    return sumOfArray;

}

let givenArrayNumber = [5, 7, 8, 10, 45, 30];
let sumGivenArrayNumber = sumOfArrayNumber(givenArrayNumber);
console.log('sumOfArray = ', sumGivenArrayNumber);

let teacherArrayNumber = [23, 45, 7, 22, 67, 88, 122, 78, 99];
let sumTeacherArrayNumber = sumOfArrayNumber(teacherArrayNumber);
console.log('sumTeacherArrayNumber = ', sumTeacherArrayNumber);