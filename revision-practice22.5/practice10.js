/* 
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? 
তাহলে তুমি সেই কোড করে ফেলো 
*/
const arr = [81, 86, 20, 45, 30, 87, 89, 92, 70, 80,]
for (const i of arr) {
    if (i > 80) {
        console.log(i);
    }
}