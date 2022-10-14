/*  
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes. 

*/

function hourConvertToMinuties(hour) {
    let minutes = hour * 60;
    return minutes;
}

let givenHour = 10;
let resultMinutes = hourConvertToMinuties(givenHour);
console.log(resultMinutes);

/*
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030,1700,1900,1600] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. 
*/

function findLeapYear(year) {
    let newArray = [];
    let newArraySum = 0;
    for (let i = 0; i < year.length; i++) {
        if ((year[i] % 400 == 0) || ((year[i] % 4 == 0) && (year[i] % 100 != 0))) {
            newArray.push(year[i]);
            newArraySum = newArraySum + year[i];
        }
    }
    const obj = {
        arr: newArray,
        sum: newArraySum
    }
    return obj;
}
let givenYear = [2023, 2024, 2025, 2028, 2030, 1700, 1900, 1600];
const _result = findLeapYear(givenYear);
console.log(_result);


