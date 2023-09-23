
// ######################## Spread Concept Interoduce #######################

// spread k jo diffrent value form of nested  Array in side Array ko ak 

// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


const bollywood_cartoon = ['tom','kik','doremon','Ninja-Httori'] 
const hollywood_cartoon = ['benten','spider-man','iron-man']

// console.log(bollywood_cartoon.push(hollywood_cartoon));
// console.log(bollywood_cartoon);
const new_Arry = bollywood_cartoon.concat(hollywood_cartoon);
console.log(typeof new_Arry);
console.log(String(new_Arry));


console.log(...bollywood_cartoon,...hollywood_cartoon);

const allArry =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const anotherArry = allArry.flat(Infinity)
console.log(anotherArry);

const maths = 52
const science = 78
const biology = 45

console.log(Array.of(maths,science,biology))




