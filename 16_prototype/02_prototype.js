// // question  properties of method...
// let myName = "Bhavesh      ";
// console.log(myName.trueLength);


let myHeros = ["Hulk","IronMan"];

let heroPower = {
    hulk : "GamaRadiation",
    ironMan : "Technology",

    getIronManPower: function(){
        // console.log(`ironMan power is ${this.ironMan}`); // this  used for current situation..
    }
}

// ye bhavesh vali properties sab ka pass chali gai... jab power thi object k ander..par jab Array k pass hoto??
Object.prototype.bhavesh = function(){
    // console.log("here is bhavesh comming ");
}


// ye heybhavesh vali properties sab ka pass chali NHI gai... jab power SIRF ARRAY  pass hoto HE SABME NAHI JATI...
// SHOW NOTES PHOTO.

//FUNCTION  ********|
// ARRAY ***********|----------- OBJECT -------- NULL.
//STRING ***********|

Array.prototype.heyBhavesh = function(){
    // console.log(`this is a array usinf power is here.`);
}



// myHeros.bhavesh(); // yes, acess object power.
// heroPower.bhavesh(); // yes acess object power.
myHeros.heyBhavesh(); // yes, access power of the array.
// heroPower.heyBhavesh() // sorry can't access power of araay.

//####################################################################################################################################################################################################################################

// ************************* Inheritance.
// Inheritance in JavaScript is defined as the ability of a class to derive properties and characteristics from another class while having its own properties as well.
// ki kisiski bhi properties ko kese diffret uses  k liye  acess kar sakte ho... called prototype inheritance.

const user = {
    name : "chai",
    gmail : "code@ex.com"
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'js assignent',
    fullTime : true,
    __proto___:teachingSupport  // jahan par __proto__ he use refer kar do teachingSupport ko...jahan par teachingSupport ko TASupport KA ACESS MIL GAYA HE......ISKA ACCESS BAHAR BBHI LE SAKTE HO..
}

teacher.__proto___ = user;  // teacher bhi user ki sari accesss ko le sakta he...

//######################### new approch MODEL SYNTAX ###########################
// Object.setPrototypeOf(teachingSupport, teacher);


let anotherUserName = "bhavesh   ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // current context jisne bulaya use hi me dunga result....
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"bman0".trueLength();
"spiderman".trueLength();