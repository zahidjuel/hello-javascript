/* 
Write a function that will take a integer as a input and will return the 
factorial number for this input. ( using for and while loop ) 

*/
function fact(n) {
    let result = 1;
    let i = n;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}

console.log(fact(1));
console.log(fact(3));
console.log(fact(5));