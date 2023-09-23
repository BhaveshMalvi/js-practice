// *********************** Basic of functions ***************************
// ########################################################################### 
// jab hum {} use  return.
// jab hum () use not a  return.
// ###########################################################################

// syntax
// function name(params) {
//     return params
// }

// name()
// name : function define
// () : function execution

// return means after that not operation run


// ************************** stop Introduction ****************

function addTwoNumber(num1, num2) {
  const total = num1 + num2;
  // return console.log(total);
  return total;
}

function userName(fname, lname) {
  // return console.log(`your first name ${fname} and last name is ${lname}`);
  return `your first name ${fname} and last name is ${lname}`;

  // jab ham return me console ko print karte he tab globle me kiya hua print console undefne atahe kyon ki return k bad koi operation perform nahi hota he.
}

addTwoNumber(4, 10);
userName("bhavesh", "malvi");

const result = addTwoNumber(10, 52);
console.log(result);

const fullName = userName("Bhavesh", "Malvi");
console.log(fullName);

// ************************* Spread Concept ************************

function spreadValues(val1, val2, ...spread) {
  return `the value first is ${val1} and value of second is ${val2} and spread value are ${spread}`;
}

const spreadValuesAssign = spreadValues(23, 45, 500, 600, 800, 7000);
console.log(spreadValuesAssign);

// ****************************** Object of function **********************

const iteam = {
  fruit: "banana",
  price: 100,
};

console.log(iteam.fruit);

function handleIteamFunctionOne(fruit, price) {
  console.log(`the fruit name is ${fruit} also price is ${price}`);
}

handleIteamFunctionOne(iteam.fruit, iteam.price);

function handleIteamFunctionTwo(mentionIteam) {
  console.log(
    `the fruit name is ${mentionIteam.fruit} also price is ${mentionIteam.price}`
  );
}

handleIteamFunctionTwo(iteam);
// ************* Or ****************
// handleIteamFunctionTwo({
//     fruit :'banana',
//     price : 345
// })

// ************************* Array of function *******************

const firstArr = [200, 300, 500, 700];

function handleArr(getIteam) {
  return getIteam[2];
}

console.log(handleArr(firstArr));

console.log(handleArr([500, 700, 1000, 600]));


