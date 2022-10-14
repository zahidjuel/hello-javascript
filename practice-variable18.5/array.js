/*
 ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও।
তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

*/

var learningJs = ['variable', 'array', 'conditional', 'loop', 'function', 'object'];
for (var i = 0; i < learningJs.length; i++) {
    console.log(learningJs[i]);
}

/*
৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও।
তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

*/

var mobileBrand = ['Symphony i20', 'Nokia 2700', 'Nokia 1100', 'Lava 11', 'vivo y20'];

var num = 0;
while (num < mobileBrand.length) {
    console.log(num + 1, mobileBrand[num]);
    num++;
}

/* ৩৫.
একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। 
আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

*/
var num1 = 30;
while (num1 <= 86) {
    console.log(num1);
    if (num1 == 44) {
        break;
    }
    num1++;
}

/* ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। 
যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। 
বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */

var bookPrice = [120, 450, 234, 210, 45, 139, 199];
for (var i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log(bookPrice[i]);
}
