
let arrayNumber = [5, 7, 8, 10, 45, 30];
let sumOfArrayNumber = 0;
let sumOfEvenArrayNumber = 0;
let sumofOddArrayNumber = 0;


for (let i = 0; i < arrayNumber.length; i++) {
    sumOfArrayNumber = sumOfArrayNumber + arrayNumber[i];
    if ((arrayNumber[i] % 2) != 0) {
        sumofOddArrayNumber = sumofOddArrayNumber + arrayNumber[i];
    }
    else {
        sumOfEvenArrayNumber = sumOfEvenArrayNumber + arrayNumber[i];
    }
}
console.log(arrayNumber);
console.log(sumOfArrayNumber);
console.log(sumOfEvenArrayNumber);
console.log(sumofOddArrayNumber);


//  using funcntion findOddSum of array
