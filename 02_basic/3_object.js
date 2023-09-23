
const syn = Symbol()  // this is a symbole it is a unique all these time.

const myObj = {
    name : "Bhavesh",
    age : 21,
    location : "Ahmedabad",
    isLogIn : true,
    lastLogIn  : ["Monday","Saturday"],
    "nikName" :  "Gotu",
    [syn] :"spider-man"   // this is a symbole as called [ variable_name] : declered a string.
}

console.log(myObj.age);
console.log(myObj.location);
console.log(myObj.lastLogIn);
console.log(myObj[syn]); // this is a declered a symbole.

myObj.location = "Rajsthan";
Object.freeze(myObj)
myObj.location = "Palnpur"
console.log(myObj.location);


// myObj.fun = function(){
//     console.log("hello world");
// }



