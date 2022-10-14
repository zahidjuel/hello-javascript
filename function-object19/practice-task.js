/* 
1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output. 

*/
function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}

foo();

console.log('');

/*
 2) Write a function called make_avg() which will take an three integers and return the
average of those values. 

*/
function make_avg(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    return avg;
}

let average = make_avg(100, 30, 50);
console.log(average);

console.log('');

/* 
4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter 

*/
// has return + has parameter

function oddEven(num) {
    if (num % 2 === 0) {
        return console.log(num, 'is Even');
    }
    else {
        return console.log(num, 'is odd');
    }
}
oddEven(23);
oddEven(22);
oddEven(0);


console.log('');

// No return + has parameter
function odd_even(number) {
    if (number % 2 === 1) {
        console.log(number, 'is odd')
    }
    else {
        console.log(number, 'is even');
    }
}

odd_even(44);
odd_even(433);

console.log('');

/* 
5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up. 

*/


function differentActivities(signal) {
    if (signal == 'green') {
        return 'you should cross the road';
    }
    else if (signal == 'red') {
        return 'you may be in danger !!'
    }
    else if (signal == 'yellow') {
        return 'you should stop';
    }

    else {
        return 'color not matched';
    }
}

let color = differentActivities('red');
console.log(color);


