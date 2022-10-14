// Find if anybody got A+ from your friends
// marks = [78, 82, 69, 89, 32, 67, 91];


function checkGPA(arr) {
    let APlusFriends = [];
    let withoutAPlusFriends = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log("friend " + i + "th mark: " + arr[i]);
           if (arr[i] >= 80) {
               APlusFriends.push(arr[i]);
           }
           else {
               withoutAPlusFriends.push(arr[i]);
           } 
    }

    return {
        APlusFriends: APlusFriends,
        withoutAPlusFriends: withoutAPlusFriends,
    }; 

}
// checkGPA([78, 82, 69, 89, 32, 67, 91]);
 console.log(checkGPA([78, 82, 69, 89, 32, 67, 91]));

