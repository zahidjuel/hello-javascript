/* 
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। 
সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

*/

function bestFriend(names) {
    let largestName = names[0];
    let smallestName = names[0];
    for (const i of names) {
        if (i.length > largestName.length) {
            largestName = i;
        }
    }
    return largestName;
}

const friendName = ['Pinkey Chowdhury', 'Arafat Alif', 'Zahid Juel',
    'Shishir Ahmed Munna', 'Wadud Hossain'];
console.log(bestFriend(friendName));
console.log(typeof bestFriend(friendName));