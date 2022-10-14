/*
3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. 

*/
function make_avg(array) {
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum = arraySum + array[i];
    }
    let avg = arraySum / array.length;
    return avg;
}

let givenArray = [10, 45, 20, 15, 30, 24, 16];
let average = make_avg(givenArray);
console.log(parseFloat(average.toFixed(2)));