var shoppingCart = {
    books: 1,
    sungalass: 2,
    keyboard: 3,
    mouse: 4,
    pen: 5,
}

// get object property
// when you know the specefic property name, use dot notation to get the property value.

var penCount = shoppingCart.pen;
console.log(penCount);

// alternative system
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

//
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyValue);

// all get properties/keys 
var allProperties = Object.keys(shoppingCart);
console.log(allProperties);

// all get values
var allPropertiesValues = Object.values(shoppingCart);
console.log(allPropertiesValues);

console.log(shoppingCart);

//  set proerties values
shoppingCart.sungalass = 6;
console.log(shoppingCart);

//
shoppingCart['sungalass'] = 29;
console.log(shoppingCart.sungalass);

// 
var propertyValue = shoppingCart[propertyName] = 200;
console.log(propertyValue);
console.log(shoppingCart);