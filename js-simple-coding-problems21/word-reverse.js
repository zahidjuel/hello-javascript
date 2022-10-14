function wordReverse(text) {
    const word = text.split(' ');
    // 'I', 'am', 'a', 'good', 'boy' ]
    const result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element); // [ 'boy', 'good', 'a', 'am', 'I' ]      
    }
    const reverse = result.join(' ');
    return reverse;
}

const myString = 'I am a good boy';
const reverse = wordReverse(myString);
console.log(reverse);