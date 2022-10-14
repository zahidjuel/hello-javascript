function reverseString(text) {
    let element = '';
    for (let i = text.length - 1; i >= 0; i--) {
        // element = element + `${text[i]}\n`;
        element = element + text[i];
    }
    console.log(element);
}
const myString = 'I am a good boy';
const reverseString_ = reverseString(myString);

//    response = response + `${number} * ${i} = ${result}\n`;