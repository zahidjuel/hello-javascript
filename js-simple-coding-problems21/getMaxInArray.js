// Write a JavaScript function to find the highest value in an array.

const arr1 = [3, 5, 8, 100, 20];

const max = Math.max(...arr1);
console.log(max);

const index = arr1.indexOf(max);
console.log(index); // 👉️ 3

console.log('');

// Write a JavaScript function to find the highest value in an array.

function getMax(numbers) {
    let max_value = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max_value) {
            max_value = numbers[i];
        }
    }
    return max_value;
}

const value = [100, 4, 6, 7, 8, 9, 21, 56, 12, 78];
const maxNumber = getMax(value);
console.log('Max_number : ', maxNumber)

const height = [1005, 4676, 654, 744, 846, 0, 2143, 56, 12435, 758];
const maximumNumber = getMax(height);
console.log('Maximum_number : ', maximumNumber)


// Write a JavaScript function to find the lowest value in an array.

function getMin(numbers) {
    let min_value = numbers[0];
    let maxvalue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min_value) {
            min_value = numbers[i];
        }
    }

    return min_value;
}

let num = [21, 45, 67, 54, 34, 54, 34, -56, -1, 0, -9, -69, -65];
let minimumValue = getMin(num);
console.log('minimumValue : ', minimumValue);
