// ************************** IIFE ***************************** 
// Immediately Invoked Function Expressions (IIFE)
// as like a syntax 
// ()();
// 1>.  Grouping Operator as global scope. () == function defination only define where a wrapper in paranthicies
// 2>. immediately invoked function expression () == function execution

// most remember ; use must if not apply then show these error. 

// #########################################################################################################


// function user() {
//     let userName = "Bhavesh"
//     console.log(`this visited website user name is, ${userName}`);
// }

// user()

// AS LIKE SHOW THIS FUNCTION IS 

(function user() {
    let userName = "Bhavesh"
    console.log(`this visited website user name is, ${userName}`);
})();



(function sum(val1,val2){
    let total = val1 + val2
    console.log(`${val1} + ${val2} = ${total}`)
})(56,89);


((number1,number2) => {
    let multiply = number1 * number2
    console.log(`${number1} * ${number2} = ${multiply}`);
})(78,65)