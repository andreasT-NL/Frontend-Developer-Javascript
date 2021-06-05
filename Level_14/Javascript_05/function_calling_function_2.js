
const btw = function (netto) { //helper function
    return 0.21 * netto; // returns BTW amount (21%)
};

const priceIncl = function (netto) { //main function
    return btw(netto) + netto;

};

console.log(priceIncl(1000)); //logging function incl. value
