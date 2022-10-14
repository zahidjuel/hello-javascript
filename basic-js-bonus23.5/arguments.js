function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments); // array like object
    console.log(arguments[3]);
    console.log(arguments[4]);
}
add(20, 40, 34, 45, 67);