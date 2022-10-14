const jimMarks = 99;
const delaMarks = 99;
const chinkuMarks = 69;

if (jimMarks > delaMarks) {
    if (jimMarks > chinkuMarks) {
        console.log(jimMarks, 'Jim will get the cake.');
    }
    else {
        console.log(chinkuMarks, 'Chinku will get the cake.');
    }
}
else if (delaMarks > chinkuMarks) {
    if (delaMarks > jimMarks) {
        console.log(delaMarks, 'Dela will get the cake.');
    }
    else {
        console.log(jimMarks, 'jim will get the  cake.');
    }
}

else if (chinkuMarks > jimMarks) {
    if (chinkuMarks > delaMarks) {
        console.log(chinkuMarks, 'Chinku will get the cake.');
    }
    else {
        console.log(delaMarks, 'dela will get the  cake.');
    }
}
else {
    console.log('The Marks are equal. Anyone will not get the cake');
}


/*
problem :3  
Print the largest number using nested if-else

sample input:
13, 79, 45

Output:
79 
*/

var num1 = 12;
var num2 = 12;
var num3 = 10;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('Largest number = ' + num1);
    }
    else {
        console.log('Largest number = ' + num3);
    }
}
else if (num2 > num3) {
    if (num2 > num1) {
        console.log('Largest number = ' + num2);
    }
    else {
        console.log('Largest number = ' + num1);
    }
}
else if (num3 > num1) {
    if (num3 > num2) {
        console.log('Largest number = ' + num3);
    }
    else {
        console.log('Largest number = ' + num2);
    }
}
else {
    console.log('The numbers are equal !!!');
}

