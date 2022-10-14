// 0+1+2+3+4+5+6+7+8+9+10;

function addNumbers(number) {
    let sumNum = 0;
    for (let i = 0; i <= number; i++) {
        sumNum = sumNum + i;
    }
    return sumNum;
}

let myNum = 10;
let sumMyNum = addNumbers(myNum);
console.log(sumMyNum);

// 1*2*3*4*5*6*7*8*9*10;
function multiplicationNumbers(number) {
    let multiplicationNum = 1;
    for (let i = 1; i <= number; i++) {
        multiplicationNum = multiplicationNum * i;
    }
    return multiplicationNum;
}

let myMultiplicationNum = 5;
let sumultiplicationMyNum = multiplicationNumbers(myMultiplicationNum);
console.log(sumultiplicationMyNum);

//  factorial : 5! = 5*4*3*2*1 : n! = n*(n-1)! ; 5! = 5*(5-1)! ;

function factorial(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

let givenFactorialNumber = 4;
let factorialNumber = factorial(givenFactorialNumber);
console.log('factorial of ' + givenFactorialNumber + '! =', factorialNumber);