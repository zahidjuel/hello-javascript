// 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে 

/* 
0-32 = F grade
33-39 = D
40-49 = C
50-59 = B
60-69 = A-
70-79 =A
80-95 = A+
96-100= Golden + 

*/

var result = 76;

if (result < 0 || result > 100) {
    console.log('Not Supported !')
}
else if (result < 33 && result > 0) {
    console.log(result, " tumi fail marco ricksha chalaw akkhon");
}
else if (result >= 33 && result < 40) {
    console.log(result, "Tumi D grade paiso ");
}
else if (result >= 40 && result < 50) {
    console.log(result, "tumi C grade paico ");
}
else if (result >= 50 && result < 60) {
    console.log(result, 'tumi b grade paiso')
}
else if (result >= 60 && result < 70) {
    console.log(result, 'tumi A- grade paiso')
}
else if (result >= 70 && result < 80) {
    console.log(result, 'tumi A grade paiso')
}
else if (result >= 80 && result <= 95) {
    console.log(result, 'tumi A+ grade paiso')
}
else {
    console.log(result, 'tumi Golden A+ grade paiso')
}

/* 
২. এমন  একটা  প্রোগ্রাম  লিখো  যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  
জোর  নাকি  বিজোড়  

*/

let num = 0;

if (num % 2 == 0) {
    console.log(num, 'is Even');
}
else {
    console.log(num, 'is odd');
}

/* 
৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  
কাজ  হবে ক্রোম অনুসারে সাজানো  
Write a JavaScript program to sort the items of an array.
*/

const arr1 = [3, 4, 5, 7, 0, 10, 1, 2, 6, 8, 9, 15, 20, 18, 17, 19, 11, 12, 13, 14, 16];

let min_value = arr1[0];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < min_value) {
        min_value = arr1[i];
    }
}
arr2.push(min_value);
console.log(arr2);



