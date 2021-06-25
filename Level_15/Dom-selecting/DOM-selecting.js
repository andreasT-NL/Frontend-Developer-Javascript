// select by TagName with query
let navigation = document.querySelector('nav');
console.log(navigation);

//select all li-elements by TagName with query
let navigationLi = document.querySelector('li');
console.log(navigationLi);

// selecting all all li-elements using forEach. 
// for this HTML collection of li's need to be converted into an array. 
//converting-------forEach method
Array.from(navigationLi).forEach(function (item) {
    console.log(item);
})
//moving up in DOM to parent element:
console.log('this is the parent:', navigationLi.parentNode);
//or 
console.log('this is the parent:', navigationLi.parentElement);
// parent of the parent
console.log('this is the parent:', navigationLi.parentElement.parentElement);

//moving down to child(ren) element
console.log(navigation.children);

//select next sibling
console.log('this is the next sibling: ', navigation.nextElementSibling);

//select previous sibling
console.log('this is the previous sibling: ', navigation.previousElementSibling);

const indent = document.getElementsByClassName('indent');
console.log(indent[0]);

//add content to parent element
navigation.parentElement.querySelector('li').innerHTML +='<br/> Too cool for you!';