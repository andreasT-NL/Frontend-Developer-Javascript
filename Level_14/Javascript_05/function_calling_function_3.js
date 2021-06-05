const basePrice = function (brutto) { //helper function
    return brutto / 1.21; // returns netto amount (21% of the brutto)
};

const nettoAndBtw = function (brutto) { //helper function
    const btwPrice = basePrice(brutto) * 0.21; // returns percentage (=21%)
    return [btwPrice, basePrice(brutto)];
};
console.log(nettoAndBtw(121));


