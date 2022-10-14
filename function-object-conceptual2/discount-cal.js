/* 
Write a function that takes input the total price of the products you bought and returns the net price 
calculated according to the discount table below. 

*/
function discountCalc(totalPrice) {
    if (totalPrice > 5000) {
        const discountPrice = totalPrice * (20 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else if (totalPrice >= 3000) {
        const discountPrice = totalPrice * (15 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else if (totalPrice >= 1000) {
        const discountPrice = totalPrice * (10 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else if (totalPrice >= 500) {
        const discountPrice = totalPrice * (20 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else {
        console.log("You can not get discount")
    }
}
discountCalc(590);