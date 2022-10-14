let age = 18;
console.log(age);

age = 19;
console.log(age);

age = 20;
console.log(age);

//const x = 32;
//console.log(x);

// x = 33; //  const is not reassigned
// console.log(x);

// var vs let

if (true) {
    var x = 50;
}
console.log(x);


if (true) {
    let y = 80; // let & const blockscope. so, code not working..........
}
console.log(y);




if (false) {
    console.log('Zahid');
}
else if (true) {
    console.log('Juel')
}
else {
    console.log('Pinkey Chowdury');
}