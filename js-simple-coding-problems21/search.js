const lyrics = 'Tumi bondhu kala pakhi. Ami jeno ki, Bosonto kale tomai bolte pari ni';
const searchString = 'pakhi';

const lyricsUpperCase = lyrics.toUpperCase();
const searchStringUppercase = searchString.toLocaleUpperCase();
const doesExist = lyricsUpperCase.includes(searchStringUppercase);
const doesExistOneLine = lyrics.toUpperCase().includes(searchString.toUpperCase());
console.log(doesExist);
console.log(doesExistOneLine);

console.log(lyrics.indexOf('i'));
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kailla'));

if (lyrics.indexOf('pakhi') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('Can not find it');
}

console.log(lyrics[6]);
console.log(lyrics[7]);

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.startsWith('tumi'));

console.log(lyrics.endsWith('ni'));

const fileName = 'mybiodata.pdf';
const otherFileName = 'mybiodata.png';

console.log(fileName.endsWith('.pdf'));
console.log(otherFileName.endsWith('.pdf'));
