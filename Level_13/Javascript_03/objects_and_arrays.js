// opdracht 1
let person = {
    name: 'Andreas',
    age: 39,
    evaluations: [7, 10, 9]
};
console.log(person); //logs object 'person'
console.log(person.name); //logs 'name'-element with dot-notation 
console.log(person['name']); //logs 'name'-element with bracket-notation

console.log(person.age); //logs 'age' element with dot-notation 
console.log(person['age']); //logs 'age' element with bracket-notation 
console.log(person['evaluations']); //logs 'evaluations'-element with bracket-notation

//opdracht 2
let color = ['green', 'blue', 'red'];
let more = color.push('yellow', 5);//add yellow to color
let greeting = {//new object
    greeting: 'hi ik ben een object'
}
let hello = color.push([greeting]);//add new object to object'color'
console.log(color.length); //logs amount of elements
console.log(color[5]); //logs 5e element in dit geval ingeladen object.
