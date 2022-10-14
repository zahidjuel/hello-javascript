function areaOfCircle(r) {
    const area = Math.PI * r * r;
    return parseFloat(area.toFixed(2));
}

console.log(areaOfCircle(5));
console.log(areaOfCircle(7));
console.log(areaOfCircle(3));