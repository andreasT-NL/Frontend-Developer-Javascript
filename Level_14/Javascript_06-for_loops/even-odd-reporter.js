// NOTE: both versions bellow are equally the same result

for (i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' even');
    } else {
        console.log(i + ' uneven');
    }
}

// let i = 0; // variable
// while (i <= 20) { //condition to execute code bellow
//     if (i % 2 === 0) {
//         console.log(i + ' even');
//     } else {
//         console.log(i + ' uneven');
//     }
//     i++; // adds every loop +1 to the variable till reached condition (20) and stops looping.
// }