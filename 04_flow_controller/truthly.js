const userEmailArr = []
if (userEmailArr) {
    console.log("got user email");
}
else{
    console.log("don't get user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmailObj = {}
if(Object.keys(userEmailObj).length == 0){
    console.log("object empty");
}


//********************** Nullish Coalescing Operator (??)****************
// null undefined


// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);


// ************************ Terniary Operator *************************
// condition ? true : false

const price = 250

price <=300 ? console.log("in budget") : console.log("sorry !!! out of budget");

