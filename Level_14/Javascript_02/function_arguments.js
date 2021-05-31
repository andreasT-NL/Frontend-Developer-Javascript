const painting = function (color, wallOne) {
    console.log('The wall has been painted ' + color);
    console.log('The north wall has been painted ' + wallOne);
};


painting('green', 'orange'); //Order is important: green = color / orange = wallOne
// painting(''); //when no argument the sentence ends with 'painted'
// painting('yellow');