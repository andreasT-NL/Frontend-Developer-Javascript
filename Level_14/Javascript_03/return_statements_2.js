// function to compare numbers >> this function DOES something
const brendaBot = function ([age, peopleIn]) {
    if (age < 18) {
        return 'this is a club for adults';
    }
    else if (peopleIn > 100) {
        return 'its too busy now, come back later';
    }
    else {
        return 'come in';
    }
};
// variable
const maxNumber = brendaBot([20, 87]); //max. 100 people

// to check variable in 'node'
console.log(maxNumber);
