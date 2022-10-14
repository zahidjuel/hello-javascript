const studentAge = [34, 23, 12, 34, 7, 3, 12, 14, 16, 18];

const partial1 = studentAge.slice(2, 5);
console.log(partial1);
console.log(studentAge);


// The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, 
// if necessary, inserts new elements in their place, returning the deleted elements.
// returns — An array containing the elements that were deleted.

const partial2 = studentAge.splice(2, 5, 99, 107);
console.log(partial2);
console.log(studentAge);