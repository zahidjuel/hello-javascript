// 1. Convert radian to Degree

function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return 'Please enter a number variable: ';
    }
    let degree = radian * 57.2958; // 1 radian = 57.2958 degree.
    return parseFloat(degree.toFixed(2));
}

// console.log(radianToDegree(10));
// console.log(radianToDegree(25));
// console.log(radianToDegree(199));
// console.log(radianToDegree('199'));

// 2. check whether the given file name is a javascript file or not

function isJavaScriptFile(string) {
    if (typeof string != 'string') {
        return 'please enter a string variable : ';
    }
    if (string.endsWith('.js')) { // JavaScript files have the file extension .js
        return true;
    }
    else {
        return false;
    }
}

// console.log(isJavaScriptFile('app.js'))
// console.log(isJavaScriptFile('js.png'))
// console.log(isJavaScriptFile('image.js.png'))
// console.log(isJavaScriptFile('image.jpg.js'))
// console.log(isJavaScriptFile(true));
// console.log(isJavaScriptFile(99));

// 3. Calculate the total oil price that I have to pay

function oilPrice(diesel, petrol, octane) {
    if ((typeof diesel != 'number') || (typeof petrol != 'number') || (typeof octane != 'number')) {
        return 'Please enter a number variable : ';
    }
    let dieselPrice = diesel * 114;
    let petrolPrice = petrol * 130;
    let octanePrice = octane * 135;

    let totalPrice = dieselPrice + petrolPrice + octanePrice; // addition
    return totalPrice;
}

// console.log(oilPrice(1, 1, 1));
// console.log(oilPrice(30, 20, 10));
// console.log(oilPrice(1, 0, 2));
// console.log(oilPrice(0, 2, 3));
// console.log(oilPrice('1', 2, 3));
// console.log(oilPrice(1, '2', 3));
// console.log(oilPrice(1, 2, '3'));

// 4. publicBusFare

function publicBusFare(num) {
    if (typeof num != 'number') {
        return 'Please enter a number variable :';
    }
    if (num >= 50) {
        let busRestPeople = num % 50;
        if (busRestPeople >= 11) {
            let publicBusPeople = busRestPeople % 11;
            let publicBusCost = publicBusPeople * 250;
            return publicBusCost;
        }
        else {
            let publicBusBill = busRestPeople * 250;
            return publicBusBill;
        }
    }
    else if (num < 50 && num >= 0) {
        let microBusRestPeople = num % 11;
        let publicBusFee = microBusRestPeople * 250;
        return publicBusFee;
    }
    else {
        return 'Population can never be negative !!';
    }
}

// console.log(publicBusFare(55));
// console.log(publicBusFare(112));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));
// console.log(publicBusFare(61));
// console.log(publicBusFare(66));
// console.log(publicBusFare(33));
// console.log(publicBusFare(14));
// console.log(publicBusFare(6));
// console.log(publicBusFare(50));
// console.log(publicBusFare(0));
// console.log(publicBusFare(11));
// console.log(publicBusFare(-1));
// console.log(publicBusFare('1'));

// 5. isBestFriend

function isBestFriend(ob1, ob2) {
    if ((typeof ob1 != 'object') || (typeof ob2 != 'object')) {
        return 'Please enter a object variable !!';
    }
    if ((ob1.name == ob2.friend) && (ob1.friend == ob2.name)) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));
// console.log(isBestFriend({ name: "abul", friend: "kabul" }, { name: "kabul", friend: "sabul" }));
// console.log(isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" }));
// console.log(isBestFriend({ name: "Zahid", friend: "Pinki" }, { name: "Pinki", friend: "Zahid" }));
// console.log(isBestFriend(34));


