// Target : Display print 20 to 1;

var num1 = 20;
while (num1 >= 1) {
    num1--;
    if (num1 >= 10) {
        continue;
    }
    console.log(num1);
}

// Target : display print 11 to 0 odd number
for (var i = 10; i >= 0; i -= 2) {
    console.log(i);
    console.log('Hello Bangladesh!!!');
    if (i == 4) {
        break;
    }

}

