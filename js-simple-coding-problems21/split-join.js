const lyrics = 'Tumi bondhu kala pakhi. Ami jeno ki, Bosonto kale, tomai bolte pari ni';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
const commaSentences = lyrics.split(',');

console.log(parts);
console.log(sentences);
console.log(chars);
console.log(commaSentences);

console.log(lyrics.slice(5, 8));
console.log(lyrics.substring(5, 9));

let string1 = 'Hello';
let string2 = 'World';
console.log(string1.concat(' ', string2));

const letter = [
    'T', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd',
    'h', 'u', ' ', 'k', 'a', 'l', 'a', ' ', 'p',
    ' ', 'j', 'e', 'n', 'o', ' ', 'k', 'i', ',',
    ' ', 'B', 'o', 's', 'o', 'n', 't', 'o', ' ',
    'k', 'a', 'l', 'e', ',', ' ', 't', 'o', 'm',
    'a', 'i', ' ', 'b', 'o', 'l', 't', 'e', ' ',
    'p', 'a', 'r', 'i', ' ', 'n', 'i'
]

console.log(letter.join(''));

const lines = [
    'Tumi bondhu kala pakhi',
    ' Ami jeno ki, Bosonto kale, tomai bolte pari ni'
]

console.log(lines.join('. '));

const word = [
    'Tumi', 'bondhu',
    'kala', 'pakhi.',
    'Ami', 'jeno',
    'ki,', 'Bosonto',
    'kale,', 'tomai',
    'bolte', 'pari',
    'ni'
]

console.log(word.join(' '));