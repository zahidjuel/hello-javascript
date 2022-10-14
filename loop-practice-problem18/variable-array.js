// string type variable
var bottole = 'water';
var mouseColor = 'yellow';
var penColor = 'blue';

// number type variable
var sungglsssPrice = 120;

// boolean type variable
var isExpensive = true;

var tableItems = ['pen', 'mouse', 'keyboard', 'bottole', 'light'];
console.log(tableItems);
var item3 = tableItems[2];
console.log(item3);

tableItems[2] = 'notebook'
console.log(tableItems[2]);
console.log(tableItems);
console.log(tableItems.indexOf('light'));
console.log(tableItems.length);

// push 
tableItems.push('charger');
console.log(tableItems);
var removeElement = tableItems.pop();
console.log(tableItems);
console.log(removeElement);

// conditional 

if (tableItems.indexOf('light') < 2) {
    console.log('condition no 1 is true ');
}
else if (tableItems.length == 5) {
    console.log('The conditon no 2 is true');
}
else {
    console.log('The condition is not true');
}