// function to compare numbers >> this function DOES something
const numberControle = function (biggerThanHundred) {
    if (biggerThanHundred > 100) {
        return true;
    } if (biggerThanHundred <= 100) {
        return false;
    }
};
// variable
const compare = numberControle(120);
// to check variable in 'node'
console.log(compare);


//Order is important: green = color / orange = wallOne
// painting(''); //when no argument the sentence ends with 'painted'
// painting('yellow');