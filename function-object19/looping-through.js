// deference between array vs object

var shoppingCart = {
    books: 1,
    sungalass: 2,
    keyboard: 3,
    mouse: 4,
    pen: 25,
    shoes: 2,
}

var keys = Object.keys(shoppingCart);
console.log(keys);

console.log(Object.values(shoppingCart));

var keys = ['books', 'sungalass', 'keyboard', 'mouse', 'pen', 'shoes']

for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}




// declare array 

var shoopingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
// var friendsAge = [12, 34, 54, 23, 43, 22];

// array in loop

for (i = 0; i < friendsAge.length; i++) {
    console.log(friendsAge[i]);
}

var friendsAge = {
    alif: 23,
    piku: 22,
    karim: 12,
    rahim: 34,
    ariana: 23,
}


// for in loop 
