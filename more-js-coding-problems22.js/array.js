const countryName = 'Bangladesh';
const age = 47;
const isIndependent = true;
const student = { id: 221, class: 7, studentName: 'Zahid Juel' };
const studentAge = [34, 23, 12, 34, 7, 3, 12, 14];

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof countryName);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(studentAge));
console.log(typeof studentAge);

console.log(Array.isArray(age)) // false
console.log(typeof add);

console.log(studentAge.includes(23));
console.log(studentAge.includes(3));
console.log(studentAge.includes(1));

console.log('');

function includeArray(numbers) {
    if (numbers.indexOf(123) != -1) {
        return true;
    }
    else {
        return false;
    }
}

const result = includeArray(studentAge);
console.log(result);

const newStudentAge = [32, 45, 3, 6, 9, 14, 26];
const allStudentAge = newStudentAge.concat(studentAge);
console.log(allStudentAge);

