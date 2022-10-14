/* 
1. if ticket number is less than  equal 100, per ticket price: 100
2. if ticket number is more than 100, but less than equal 200. First 100 ticket will be per ticket price :100.
rest  per ticket price: 90
3. if you purchase more than 200 ticket
        first 100 -----> 100tk
        101 __ 200 ----> 90tk
        200+ ___    -----> 70tk

*/

function totalCost(products) {
    const first100PerPrice = 100;
    const up100perPriceTo200 = 90;
    const up200PerPrice = 70;
    if (products <= 100) {
        const cost = products * first100PerPrice;
        console.log(cost);
    }
    else if (products <= 200) {
        const first100Price = 100 * first100PerPrice;
        const restProductprice = (products - 100) * up100perPriceTo200;
        const totalCost = first100Price + restProductprice;
        console.log(totalCost);
    }
    else {
        const first100Price = 100 * first100PerPrice;
        const up100PriceTo200 = (200 - 100) * up100perPriceTo200;
        const restProductprice = (products - 200) * up200PerPrice;
        const totalCost = first100Price + up100PriceTo200 + restProductprice;
        console.log(totalCost);
    }
}

totalCost(10);