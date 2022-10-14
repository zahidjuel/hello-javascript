/* 
function functionName(parameters) {
    // function body
    // return
}
var returnedValue = functionName(parametersValue);
console.log(returnedValue);

*/
function getAverage(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const averageMarks = totalMarks / 3;
    return averageMarks;
}

const assignment1marks = 60;
const assignment2marks = 59;
const assignment3marks = 58;

const myAverage = getAverage(assignment1marks, assignment2marks, assignment3marks);
console.log('my average so far', myAverage);

// 

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
console.log(result1);
const result2 = add(20, 12);
console.log(result2);
const totalResult = add(result1, result2);
console.log(totalResult);

// no returen no parameter
function paperJuice() {
    console.log('make juice using fruit !!!');
    console.log('save for future');
}

// Javascriopt square function

function square(num) {
    return num * num;
}

const squareNum = square(5);
console.log(squareNum); 