/* 
১.leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। 
Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। 

*/

function leapYear(year) {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    }
    return false;
}

let isLeapYear = leapYear(2023);
console.log(isLeapYear);

/* ২. 
তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। 
সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, 
সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। 

*/
function isOddOrEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

let myAge = 24;
let result = isOddOrEven(myAge);
console.log(result);

/* ৩. 
এমন একটা ফ্যাংশন লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। 
আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।  

*/

function hourConvertToMinuties(hour) {
    minuties = hour * 60;
    return minuties;
}

let givenHour = hourConvertToMinuties(10);
console.log(givenHour);

/* ৪. 
মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ 
কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে। 

*/

function hourConvertToSeconds(hours) {
    seconds = hours * 3600;
    return seconds;
}

let arrivalHour = hourConvertToSeconds(4);
console.log(arrivalHour);