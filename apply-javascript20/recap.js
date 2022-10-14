function isHappy(time) {
    if (time > 9) {
        console.log('true');
    }

    if (time < 9) {
        console.log('false');
    }
}
isHappy(8);

//
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }

    if (time < 7) {
        return false;
    }
}

var moonUp = isMoonUp(6);
console.log(moonUp);

//  

var jantus = {
    name: 'piku',
    height: '5.4 inch',
    bapErTaka: 'borolox',
    isMyLove: true,
}

var allProperties = Object.keys(jantus);
var allPropertiesValue = Object.values(jantus);
console.log(allProperties);
console.log(allPropertiesValue);

for (var i = 0; i < allProperties.length; i++) {
    var propertyName = allProperties[i];
    var propertyvalue = allPropertiesValue[i];
    console.log(propertyName + ':' + ' ' + propertyvalue);
}