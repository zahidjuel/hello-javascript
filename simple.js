let a = 5;
console.log(a.toString());

function compare(a, b) {
    if (a.toString() === b) { // check data type
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);

