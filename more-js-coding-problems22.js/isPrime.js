

/* ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।  
// Check if a number is Prime

// 1 n 11
// 2 -> n-1

/* 
Finding Prime Numbers Using Factorization
Factorisation is the best way to find prime numbers. The steps involved in using the factorisation method are:

Step 1: First find the factors of the given number
Step 2: Check the number of factors of that number
Step 3: If the number of factors is more than two, it is not a prime number.

Now, 36 can be written as 2 × 3 × 2 × 3.  So, the factors of 36 here are 1, 2, 3, 4, 6, 9, 12,
18, and 36. Since the number of factors of
36 is more than 2, it is not a prime number but a composite number.

Now, if we take the example of 19. The prime factorisation of 19 is 1 x 19. 
You can see here, there are two factors of 19. 
Hence, it is a prime number.

But, Why is 1 Not a Composite Number?
The answer to this also lies in the definition of composite numbers. 
According to the definition, a composite number is a natural number which more than two positive factors. 
But, 1 has only 1 factor i.e. 1 itself. 
So, one is not a composite number.
*/

function isPrime(number) {
    if (number == 1) {
        return 'neitheir  prime nor composite';
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
    // less than 1 
    else {
        return 'neither prime nor composite because number < 1';
    }

}
console.log(isPrime(7));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(50));


function primeRange(arr) {
    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        const prime = isPrime(arr[i]);
        primeArray.push(prime)
    }
    return primeArray
}

console.log(primeRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 0]));

// print 1 to 100 composite or prime number:


let primeNumber = [];
let compositeNumber = [];
let number = [];
let primeNumberCount = 0;
let compositeNumberCount = 0;
for (let i = 1; i <= 100; i++) {
    let count = 0;
    for (let j = 1; j <= 100; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 2) {
        primeNumber.push(i);
        primeNumberCount++;
    }
    if (count > 2) {
        compositeNumber.push(i);
        compositeNumberCount++;
    }
    if (count < 2) {
        number.push(i);
    }
}

console.log('PrimeNumber : ', primeNumber);
console.log('CompositeNumber : ', compositeNumber);
console.log('number', number);
console.log('primeNumberCount : ', primeNumberCount);
console.log('compositeNumberCount : ', compositeNumberCount);