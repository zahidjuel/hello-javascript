let myName = 'Zahid Juel';
console.log(myName.length);
console.log(myName[3]); // string can get value but not set .

const firstName = 'Pinkey';
const lastName = 'pinkey';
console.log(firstName.toUpperCase());
console.log(firstName.indexOf('n'));

if (firstName.toUpperCase() === lastName.toUpperCase()) {
    console.log('Valid name');
}
else {
    console.log('Not valid name');
}

const lyrics = 'Tumi bondhu kala pakhi. Ami jeno ki, bosonto kale tomai bolte pari ni. Sada sada kala kala rong jomese sada kala.'
const searchString = 'pakhi';
const doesExist = lyrics.includes(searchString);
console.log(doesExist);




