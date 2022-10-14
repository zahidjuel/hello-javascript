// Count the number of vowels in a string

function vowelInString(string) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    let vowelArray = [];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i]) == true) {
            vowelArray.push(string[i]);

            count++;
        }
    }
    let vowel = vowelArray.join('');
    return { vowel, count };
}

const love = 'I am in love with you';
// vowelInString(love);
console.log(vowelInString(love));