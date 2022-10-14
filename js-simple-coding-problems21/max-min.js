// write a function that will take 3 parameters & will return the max number
function max(a, b) {
    if (a > b) {
        return a;
    }
    else if (a == b) {
        return 'The numbers are equal';
    }
    else {
        return b;
    }
}
console.log(max(2, 3));

function getMax(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
        else {
            return num3;
        }
    }
    else if (num2 > num3) {
        if (num2 > num1) {
            return num2;
        }
        else {
            return num1;
        }
    }
    else if (num3 > num1) {
        if (num3 > num2) {
            return num3;
        }
        else {
            return num2;
        }
    }
    else {
        return 'The numbers are equal !!';
    }
}

console.log(getMax(76, 78, 76));

function maxNum(x, y, z) {
    if (x == y && y == z && z == x) {
        return 'The numbers are equal !!';
    }
    let max_value = 0;
    if (x > y) {
        max_value = x;
    }
    else {
        max_value = y;
    }
    if (z > max_value) {
        max_value = z;
    }
    return max_value;

}
console.log(maxNum(21, 3, 26));

console.log(Math.max(34, 56, 78, 89, 90, 56, 23, 56));
console.log(Math.min(34, 56, 78, 89, 90, 56, 23, 56, 0, -2));

let arr1 = [34, 56, 78, 89, 90, 56, 23, 56, - 2, -5];
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));