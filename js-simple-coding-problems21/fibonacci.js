
/*  
a series of numbers in which each number(Fibonacci number) is the sum of the two preceding numbers.  
The simplest is the series 1, 1, 2, 3, 5, 8, etc.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
 
*/

// program to generate fibonacci series up to n terms

// take input from the use
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series: 100 ');

for (let i = 1; i <= 10; i++) {
    console.log(n1); // 0
    nextTerm = n1 + n2; // 1
    n1 = n2; // n1 = 1
    n2 = nextTerm; // n2 = 1
}

console.log(' ');

let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);