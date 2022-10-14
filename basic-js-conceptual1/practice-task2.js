const year = 1900;

if (year % 400 == 0) {
    console.log(year, 'is a leap Year');
}
else if (year % 4 == 0 && year % 100 != 0) {
    console.log(year, 'is a leap Year');
}
else {
    console.log(year, ' is not a leap year');
}

/* ৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো  */

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


/* ৬.
উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  
খুঁজে  বের  করা  

*/
var friends = ["rahimAli123", "karimKhann", "abdullahko", "sadadHossain", "heroAlom12", 'zahidJuel'];

let bigNameFriends = friends[0];
let smallNameFriends = friends[0];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length > bigNameFriends.length) {
        bigNameFriends = element;
    }
    if (element.length < smallNameFriends.length) {
        smallNameFriends = element;
    }
}
console.log('bigName :', bigNameFriends);
console.log('smallName :', smallNameFriends);

/* 
৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে হবে  

*/
var numbers = [405, 2, 3, 3, 405, 4, 5, 6, 7, 8, 9];
var unique = [];
var bigNum = numbers[0];
var secondBigNum = numbers[1];
var smallName = numbers[2];

for (let i = 0; i < numbers.length; i++) {
    if (unique.includes(numbers[i]) == false) {
        unique.push(numbers[i]);
    }
    if (numbers[i] > bigNum) {
        secondBigNum = bigNum;
        bigNum = numbers[i];
    }
    if (numbers[i] < bigNum && numbers[i] > secondBigNum) {
        secondBigNum = numbers[i];
    }
    if (numbers[i] < smallName) {
        smallName = numbers[i];
    }
}
console.log(unique);
console.log('bigNum :', bigNum);
console.log('secondBigNum : ', secondBigNum);
console.log('smallName', smallName);