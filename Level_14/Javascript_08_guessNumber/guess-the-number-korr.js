let userName = prompt('please enter your name');
alert('Hello ' + userName + ' lets play the game Guess the number');
alert('chose the range of number to guess');
let minRange = prompt('enter the lowest number to guess');
let maxRange = prompt('enter the highest number to guess');
let totalAttempts = prompt('how many rounds would you like to play?');
let attempts = 0;

const randomNumberGenerator = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomNumber = randomNumberGenerator(minRange, maxRange);
console.log(randomNumber);
let userNumber = parseInt(prompt('guess a number between ' + minRange + ' and ' + maxRange));
console.log(userNumber);

//loop
while ((randomNumber !== userNumber) || (attempts > totalAttempts)) {

    if (attempts == totalAttempts) {
        alert('you are out of options. This game is over, sorry.');
        break;
    } else {
        userNumber = parseInt(prompt(userNumber + ' is the wrong number.try again.'));
        attempts++;
    }
};

if (randomNumber !== userNumber) {
    alert('Sadly you lost the game.');
} else {
    alert("Hooray, you've guessed the number");
}