// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// console.log('');

/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    let result = i + sum(i - 1);
    return result;
}
console.log(sum(5)); */

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

console.log(sum(5));

/* 
5 + sum(4);
5 + 4 + sum(3);
5 + 4 + 3 + sum(2);
5 + 4 + 3 + 2 + sum(1);
5 + 4 + 3 + 2 + 1;

*/
function fact(i) {
    if (i == 1) {
        return 1;
    }
    return i * fact(i - 1);
}

console.log(fact(5));

/* 
5 * fact(4);
5 * 4 * fact(3);
5 * 4 * 3 * fact(2);
5 * 4 * 3 * 2 * fact(1);
5 * 4 * 3 * 2 * 1;

*/