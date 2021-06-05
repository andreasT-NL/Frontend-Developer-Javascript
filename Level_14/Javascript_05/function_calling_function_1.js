
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};

const heyKiddo = function (age) {
    if (checkAge(age)) { // call function above
        return 'Hello there'; //return comes in top to bottom 1. true 2. false
    }
    return 'Hey kiddo';
};

console.log(heyKiddo(6)); //logging function incl. value