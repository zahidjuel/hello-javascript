console.log(Math.pow(2, 3));

const num1 = 25;
const num2 = 45;
gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
    console.log('You guys can friends');
}
else {
    console.log('You guys can apart');
}

const num3 = 3.5567;
console.log(Math.round(num3));
const num4 = 3.43210;
console.log(Math.round(num4));

console.log(Math.ceil(67.6443));
console.log(Math.floor(8.45345));

const num5 = Math.random();
console.log(num5);
console.log(Math.round(Math.random() * 100));

for (let i = 0; i < 20; i++) {
    let randomNumber = Math.round(Math.random() * 6);
    console.log(randomNumber);
}

const arr = [45, 56, 76, 32, 23, 2, 90];
console.log(Math.max(...arr));
console.log(Math.min(...arr));