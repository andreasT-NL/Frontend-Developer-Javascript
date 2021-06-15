// loop array of strings
let colors = ['yellow', 'blue', 'red', 'orange'];
while (colors.length) {
    console.log(colors);
    colors++;
}

for (colors; colors.length; colors++) {
    console.log(colors);
}
// using forEach to loop over list of array
const otherColors = ['yellow', 'blue', 'red', 'orange'];
otherColors.forEach(element => console.log(element));

// looping over object
const person = {
    name: 'Andreas',
    age: 99,
    lastName: 'Muller',
    male: true
};
for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}
