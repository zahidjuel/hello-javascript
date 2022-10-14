// Write a function named findArea() that will take base and height of a triangle and will return the area of triangle.
function findArea(base, height) {
    const area = 1 / 2 * base * height;
    return area;
}

const areaOfTriangle = findArea(3, 4);
console.log(areaOfTriangle);