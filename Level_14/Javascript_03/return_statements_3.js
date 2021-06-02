// function produce average >> this function produces something
const average = function ([number1, number2, number3, number4, number5]) {
    const avr = (number1 + number2 + number3 + number4 + number5) / 5; {
        return (Math.round(avr));
    }
};
// variable
const numbers = average([10, 20, 2, 5, 90]);

// to check variable in 'node'
console.log(numbers);
