/* 
২৪.
তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, 
৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে ,
২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে।
না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

*/
var myMoney = 20001;

if (myMoney <= 0) {
    console.log('Not Supported');
}
else if (myMoney > 80000) {
    console.log("I buy a Mac Computer");
}
else if (myMoney > 60000 && myMoney <= 80000) {
    console.log('I buy a Gaming Computer');
}
else if (myMoney > 40000 && myMoney <= 60000) {
    console.log('I buy a Lenovo Yoga Computer');
}
else if (myMoney > 20000 && myMoney <= 40000) {
    console.log('I buy a old Laptop !!');
}
else {
    console.log('I will work om my mobile');
}

/* 
২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

*/

for (var i = 1; i <= 39; i++) {
    i = parseInt(i);
    console.log(+ i + ' . ' + 'Aske amar mon valo nei !!');
}

/* 
২৬. while লুপ কিভাবে কাজ করে

*/
var num = 0; // declare & initialization loop variable
while (num < 10) { // condition
    console.log(num + 1);
    num++;  // looop variable change
}

/* 
২৭. for লুপ কিভাবে কাজ করে 

*/
for (var j = 0; j <= 5; j++) {
    console.log(j);
}

/* 
২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।  
// Loop to be continued.
*/

