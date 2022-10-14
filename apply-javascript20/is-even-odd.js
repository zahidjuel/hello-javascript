function isEvenOdd(number) {
    let remainder = number % 2;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
let peterNumber = 98;
let peterNumberIsEvenOdd = isEvenOdd(peterNumber);
console.log(peterNumberIsEvenOdd);

let juelNumber = 117;
let juelNumberIsEvenOdd = isEvenOdd(juelNumber);
console.log(juelNumberIsEvenOdd);



