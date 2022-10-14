var num5 = 10;

switch (num5) {
    case 10:
        console.log("hello");
        break;
    case 5:
        console.log("hoiceee");
        break;
    default:
        console.log('Not match number');
}

/* switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
} */

let x = 1;
switch (x) {
    case 0:
        console.log('Off');
        break;
    case 1:
        console.log('On');
        break;
    default:
        text = "No value found";
}

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

const actions = 'say_hello';
switch (actions) {
    case 'say_hello':
        let messages = 'hello';
        console.log(messages);
        break;
    case 'say_hi':
        let message = 'hi';
        console.log(message);
        break;
    default:
        console.log('Empty action received.');
}

const action = 'say_hello';
switch (action) {
    case 'say_hello': { // added brackets
        const message = 'hello';
        console.log(message);
        break;
    } // added brackets
    case 'say_hi': { // added brackets
        const message = 'hi';
        console.log(message);
        break;
    } // added brackets
    default: { // added brackets
        console.log('Empty action received.');
    } // added brackets
}
let browser = 'Firefox';
switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}
let signal = 'puurple';

switch (signal) {
    case 'green':
        console.log('you should cross the road');
        break;
    case 'red':
        console.log('you may be in danger !!');
        break;
    case 'yellow':
        console.log('you should stop !!');
        break;
    default:
        console.log('color not matched');

}



