// Find the largest element of an array

function largestElement(array) {
    let largest = array[0];
    for (const element of array) {
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let array1 = [3, 5, 7, 1, 9];

console.log(largestElement(array1))


//  Find the second largest element of an array

function secondLargestElement(array) {
    let largest = array[0];
    let smallest = array[0];
    let secondLargest = array[1];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        }
        if (element < smallest) {
            smallest = element;
        }
        else if (element > secondLargest && element < largest) {
            secondLargest = element;
        }
    }

    return { largest, secondLargest, smallest };
}

let array = [0, 120, 181, 66, 80, 35, 64, 20];

// let result = secondLargestElement(array);
// console.log(result[0], result[1])
console.log(secondLargestElement(array));