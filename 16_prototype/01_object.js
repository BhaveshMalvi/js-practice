function mutipleBy5(num){
    // this.num =num  // after understand
    return num*5;
}

mutipleBy5.power = 2;
console.log(mutipleBy5(5));
console.log(mutipleBy5.power);
console.log(mutipleBy5.prototype);

// .prototype ke o/p {} me by default context set hota he jo use method ka this he.
// . prototype sirf methos nahi internal properties bhi de ta he. 


function createUser(userName, score){
    this.userName = userName // username declered in function and inside function me confuse na ho isliye this use hota he.
    // jis se context set hota he.
    this.score = score;
}

// create prototype .....
createUser.prototype.increment = function(){
    // score++ // are tuje bulane k liye to this lagaya he...... 
    this.score++  // jisne bulaya uske pass jao. this
}


// creat prototype ....
createUser.prototype.printMe = function(){
    // console.log(`Price is ${score}`); // kiska score chaiye bhi confuce kar diya ....
    console.log(`Price is ${this.score}`);
}


// are babaua.. is me to gadbad he muje kisne bulaya he ye to bata ooooo vhai panirtikka ya bhaji pau.. 
// 1 minit ise solve karne k liye ham me jisne buaye uske pass jai ge this jis ne bulaya.
// this === jis ne bulaya.....

// with out using new keyword code nahi chalega....
// const panirTikka =  createUser("Panir-Tikka", 150);
// const pauBhaji =  createUser("Pau-Bhaji", 100);

const panirTikka = new createUser("Panir-Tikka", 150);
const pauBhaji = new createUser("Pau-Bhaji", 100);

// actually this is a called a method which are build use itself in this form. 
panirTikka.printMe(); // properties me value ai.. par...  vo addition value batani padati he... using new keyword.
pauBhaji.printMe();


// ***************  NOTES hoe to make a itsef user prototype method using function ************************************************

//FUNCTION  ********|
// ARRAY ***********|----------- OBJECT -------- NULL.
//STRING ***********|

/*

Here's what happens behind the scenes when the new keyword is used:

=> A new object is created: The new keyword initiates the creation of a new JavaScript object.

=> A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

=> The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

=> The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/