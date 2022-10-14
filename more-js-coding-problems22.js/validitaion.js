//Handle unexpected function input parameter error

function add(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'please Enter a number';
    }
    return num1 + num2;
}

const result = add(12, "45");
// console.log(result);

function multiply(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(45 * 12);
console.log(output);

var student = { name: "Yo Mama", age: 17 };
delete student.age;
console.log(student);

const nayoks = ['Bangla Bhai', 'English Bhai', 'Korean Bhai'
    , 'Turkish Bhai '];
for (const nayok of nayoks) { // for of loop using array looping through
    console.log(nayok);
}

const arr1 = [45, 56, 78, 23];
for (const i of arr1) {
    console.log(i);
}
console.log(arr1);

console.log('');

// for in loop
const names = {
    zahid: 23,
    juel: 22,
    pinku: 21,
    joba: 16,
    alif: 14,
}

for (const propertyName in names) { // for in loop using object looping through
    const propertyValue = names[propertyName];
    console.log(propertyName, propertyValue);
}

console.log(names.zahid);
console.log(names['zahid']);

console.log(Object.keys(names));
console.log(Object.values(names));
console.log(names);