
// ######################## Spread Concept Interoduce #######################

// spread k jo diffrent value form of nested  Array in side Array ko ak 

// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.


const lnUser =  {}

lnUser.Name = "Bhavesh"
lnUser.Id = "Bman@123"
lnUser.Number = 45685465664

console.log(typeof lnUser);
console.log(lnUser);

const allTimeUser = {
    name : "Bhavesh",
    id : {
        fname : "bhavesh",
        lname : "malvi" 
    }
}
// console.log(allTimeUser.__proto__);

console.log(allTimeUser.id.fname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

const {Number : objNum} = lnUser

console.log(objNum);