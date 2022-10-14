/* for (var i = 10; i >= 1; i--) {
    console.log(i);
}
 */

// target : Display every elements of an array
var numbers = [45, 67, 78, 89, 56, 34, 54];
numbers.push(55);
numbers.unshift(99);
console.log(numbers);
var i = 0;
for (i; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
}


var tableItems = ['book', 'pen', 'notebook', 'sunglass', 'laptop']
tableItems.pop();
var num = 0;
while (num < tableItems.length) {
    var tableItem = tableItems[num];
    console.log(tableItem);
    num++;
}

//

var name = "false";
console.log(typeof ('false'));
//


var i = 0;
for (i = 0; i < 5; i++) {

}
console.log(i);