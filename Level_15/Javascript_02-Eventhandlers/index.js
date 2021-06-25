let button = document.querySelector('#mybutton');
let changeColorButton = document.querySelector('#backgroundbutton');
let bodyElement = document.querySelector('body');

const alertMessage = function() {
    alert('button clicked');
};

// const makeRed = function(){
//     bodyElement.classList.add('red-background');
// };
const toggleColor = function(){
    bodyElement.classList.toggle('red-background');
};

// first button
button.addEventListener('click', alertMessage);

// second button
// changeColorButton.addEventListener('click', makeRed);
changeColorButton.addEventListener('click', toggleColor);