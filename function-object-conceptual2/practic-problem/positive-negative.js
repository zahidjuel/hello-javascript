// Write a function that will take a number and will check the number is positive or negative.

// The number zero is neither positive nor negative.
function checkPositiveOrNegative(num) {
    if (num == 0) {
        console.log(num, " is zero.");
    }
    else if (num > 0) {
        console.log(num, " is positive");
    }
    else {
        console.log(num, " is negative.");
    }
}

checkPositiveOrNegative(56);
checkPositiveOrNegative(0);
checkPositiveOrNegative(-34);