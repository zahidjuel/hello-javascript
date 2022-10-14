/* 
const myFeet = 5.8;
const myInchi = myFeet * 12;
console.log(myInchi);

const johnInchi = 84;
const johnFeet = johnInchi / 12;
console.log(johnFeet);
 
*/
// use function inchi to feet

function inchiToFeet(inchi) {
    var feet = inchi / 12;
    return feet;
}

var myFeet = inchiToFeet(94);
console.log(parseFloat(myFeet.toFixed(2)));

var johnFeet = inchiToFeet(84);
console.log(johnFeet);