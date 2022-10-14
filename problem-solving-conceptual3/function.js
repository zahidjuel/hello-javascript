let count = 5;

function name(c) {
    let num = '';
    for (let i = 5; i < 20; i++) {
        num = num + `${i}\n`;
    }
    return num;
}



const result = name(count);

console.log(result);