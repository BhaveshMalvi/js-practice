//*************************************** this are all part of Objects releted. ******************************************** 


// What is the definition of an iterator?
// An iterator is an object that contains a countable number of values. An iterator is an object that can be iterated upon, meaning that you can traverse through all the values.

// JavaScript provides several ways of iterating over a collection, from simple for loops to map() and filter(). Iterators and generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behaviour of 'for...of loops'

// What is traverse in array?
// To traverse an array means to access each element (item) stored in the array so that the data can be checked or used as part of a process.

// What is called traversing?
// Traversing means accessing each element of data structure at least once. Linked List traversal means accessing all the elements of the list starting from the head node to the last node. Traversing a tree and graph means visiting every node at least once.


//What does it mean to be enumerable?
// that can be counted
// Definitions of enumerable. adjective. that can be counted. synonyms: countable, denumerable, numerable calculable. capable of being calculated or estimated.


// show the Math inside the pi value
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
// console.log(Math.PI);

// IT HAS OWN BUILD CONST PROPERTIES..... 
const chai = {
    name: "masala chai",
    price: 100,
    isAvailable: true,
}

// Acess the name of chai...
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// define and chang the inside which own has properties... 
Object.defineProperty(chai, "name", {
    // Writable : false,
    enumerable: false, // this is a false then can't show details because that is not to count has a name iterate of chai properties.
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
