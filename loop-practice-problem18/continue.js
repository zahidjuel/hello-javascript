for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);

}

//
for (i = 0; i <= 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i);
}
//
var numbers = [45, 67, 78, 89, 56, 34, 54];
numbers.push(55);
numbers.unshift(99);
console.log(numbers);
var i = 0;
for (i; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 60) {
        continue;
    }
    console.log(number);
}