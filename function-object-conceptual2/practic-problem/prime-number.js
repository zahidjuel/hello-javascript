// Prime Numbers from 1 to 100
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(37));
console.log(test_prime(36));
console.log(test_prime(31));
console.log(test_prime(2));

//  is prime number
/* 
A prime number is a positive integer that is only divisible by 1 and itself. 
For example, 2, 3, 5, 7, 11 are the first few prime numbers. 

*/
// program to check if a number is prime or not
function isPrimeNumber(number) {
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    // check if number is greater than 1
    else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }

    // check if number is less than 1
    else {
        console.log("The number is not a prime number.");
    }
}
isPrimeNumber(10);
isPrimeNumber(11);

// 
function isPrime(num) {
    if (num == 1) {
        console.log(num, 'is neiter prime nor composite');
    }

    else if (num > 1) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(num, " is a prime number");
        }
        else {
            console.log(num, " is not a prime number");
        }

    }
    // less than 1.
    else {
        console.log(num, 'is not a prime numbe');
    }
}

isPrime(2);
isPrime(1);
isPrime(0);
isPrime(6);
isPrime(7);

