function milesToKilometer(miles) {
    const km = miles / 0.6213;
    return km;
}
const johnMiles = 2;
const johnKm = milesToKilometer(johnMiles);
console.log(parseFloat(johnKm.toFixed(4)));

const myMiles = 5;
const myKilometer = milesToKilometer(myMiles);
console.log(parseFloat(myKilometer.toFixed(4)));