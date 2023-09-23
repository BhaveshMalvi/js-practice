// ************************** Introduction of this ****************  

const user = {
    userName : "Bhavesh",
    id : 456625,
    password : "Malvi@456",
    showDataMassage : function () {
        console.log(`${this.userName} Welcome visit these Website `);
        // console.log(`${this}`);
    }
}

// user.showDataMassage()
user.userName = "Gotu"
user.showDataMassage()

// ********************* Arrow function ************************** 

// const company = function () {
//     let companyName = "Star-link"
//     console.log(` thank you for visit ${companyName} Company `);
// }

// company()

const company = () => {
    let companyName = "star-war"
    console.log(` thank you ! visit ${companyName} Company `);
}
company()


const addTwoNumber = (number1,number2) => {
    let total  =  number1 + number2
    console.log(`${number1} + ${number2} = ${total}`);
}

addTwoNumber(45,89)

// const mutiplyTwoNumber = (val1,val2) => val1 + val2

// const mutiplyTwoNumber = (val1,val2) => ( val1 + val2 )

// const mutiplyTwoNumber = (val1,val2) => ( { val1 + val2 })  not are these use all function

// console.log(mutiplyTwoNumber(46,89));

const divide = (val1,val2) => { (val1/val2)}  // if not a put that return key word then o/p is undefine so, remember these.
console.log(divide(50,25));



