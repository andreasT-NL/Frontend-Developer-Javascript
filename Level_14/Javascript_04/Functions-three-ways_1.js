// function declaration
function square(number1, number2) {
    const result = ((number1 * number1) + (number2 * number2));
    return result * result;
}

//function expression
const square = function (number1, number2) {
    const result = ((number1 * number1) + (number2 * number2));
    return result * result;
}

// arrow function
const square = (number1, number2) => {
    const result = ((number1 * number1) + (number2 * number2));
    return result * result;
}

let numbers = square(2, 3);
console.log(numbers);