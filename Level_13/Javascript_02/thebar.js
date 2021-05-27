//opdracht 1
const age = 25;
if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!'); // selecteerd als je tussen 18 en 25 bent
} else if (age < 18) {
    console.log('sorry you are too young'); // selecteerd als je jonger dan 18 bent
} else {
    console.log('sorry, maybe next time');
}
//opdracht 2 werkt nog niet!
const name = 'Sarah';
if (name === 'Lex' || name === 'Sarah') { // Lex of Sarah krijgen korting
    console.log('Free beer!');
} else {
    console.log('5 Euro please');
}

//opdracht 3
const totalAmount = 20;
if (totalAmount >= 25 && totalAmount <= 49) { // bedrag tussen 25 en 50,-
    console.log('gratis bitterballen!');
}
if (totalAmount >= 50 && totalAmount <= 99) { // bedrag tussen 50 en 100,-  
    console.log('gratis portie nachos');
}
if (totalAmount >= 100) {
    console.log('gratis flesje champagne'); // bedrag vanaf 100,-
}
if (totalAmount < 25) {
    console.log('nix is gratis in het leven'); // bedrag onder 25,-
}