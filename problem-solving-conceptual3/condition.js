// serial
let mark = 5;

if (mark > 30) {
    console.log("mark is greater than 30");
} else if (mark > 20) {
    console.log("mark is greater than 20");
} else if (mark > 10) {
    console.log("mark is greater than 10");
}
else {
    console.log('mark is less than 10');
}

// nesting
// wrong solution
let a = 3, b = 2, c = 4;

if (a > b && a > c) {
    // if (a > c) {
    //   console.log("a is largest");
    // }
} else if (c > b) {
    console.log("c is largest");
} else {
    console.log("b is largest");
}
