// Use add and multiplication to calculate wood requirements

/* 
fixed: per items wood requirements
1. chair ----> 3 cft
2. table ----> 10 cft
3. bed   ----> 50 cft

vary: quantity

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const TotalWood = woodCalculator(2, 3, 2);
console.log(TotalWood);