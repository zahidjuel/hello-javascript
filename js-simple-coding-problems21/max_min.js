// Write a JavaScript function to find the highest & lowest value in an array.

function getMaxMin(numbers) {
    let max_value = numbers[0];
    let min_value = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max_value) {
            max_value = numbers[i];
        }
        else if (numbers[i] < min_value) {
            min_value = numbers[i];

        }
    }
    return {
        maximumNumber: max_value,
        minimumNumber: min_value,
    }
}

let num = [10, 15, 17, 3, 4, 23];
let maxMin = getMaxMin(num);
console.log(maxMin);

let arr = [10, 15, 17, 4, 3, 23, 0, -560, -69, 54, 65, -80];
let MaxMin = getMaxMin(arr);
console.log(MaxMin);