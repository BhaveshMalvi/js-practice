// Array is a type of object


const myArray = [7,5,5,8,96]

console.log(typeof myArray);
console.log(myArray);
console.log(myArray.length);

// myArray.push(10)
// myArray.pop()
console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);

console.log(myArray.splice(2,1,3));
console.log(myArray);

// console.log(myArray.slice(3,5));
// console.log(myArray.shift());
console.log(myArray);
console.log(myArray.unshift(5));
console.log(myArray);

console.log(myArray.join());
console.log(typeof myArray);
console.log(typeof (myArray.join()));
console.log(myArray.includes(96));
console.log(myArray.indexOf(96));