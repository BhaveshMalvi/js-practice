// Part of Asyncronious Js.
//  Promise jo fature me jake ja k compllite hote he. 
// Promise are 3 States:

// 2 Part : 1)Consume karna or 2) build(create karna).

// ex: fetch('https://somthing.com').then().catch().finally()

// promise is one type of a Object. 

// Promise(callback_function).then(callback_function)
// .then() is a promise consumed.

// promiseOne(function(resolve,reject){}).then()

// resolve and then are connect then show op then inside function.
// promiseOne(function(resolve,reject){setTimeOut(()=>{resolve()},timeOut)}).then()

// never first op is then inside fuction because first work task complete in promise inside task finish, after then(fun(){}) remaining are work(task) are finished.
// first op is setTimeOut and after that then run  op.

// declered Promise part : 1

const promiseOne = new Promise(function (resolve, reject) {
    // Do as async Task.
    // DB Calls, cryptography, network request.

    setTimeout(function () {
        // console.log("async task 1 is complete.");
        resolve(); // resolve and then are connect then show op then().

    }, 1000);
});

promiseOne.then(function () {
    // console.log('Promise 1 Consumed');
})


// declered promise part : 2

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2 complete");
        resolve();
    }, 1000)
}).then(function () {   // not store variable of Promise so direct . after called then.
    // console.log('Promise 2 consumed');
})


// declered promise part : 3
const promiseThree = new Promise(function (resolve, reject) {
    // koi network se data aaya ho.
    setTimeout(function () {
        // this function more work like a network or file se data laya. 
        // setTimeOut ki value ko then(()=>{}) me pass karne k liye kam ata he.
        // resolve k ander data form of the {},[], function(){} kov bhi form mr data pass kar sake ho.
        resolve({
            // declred data
            UserName: "bhavesh",
            email: "bhavesh@example.com"
        })


    }, 1000)
})
// .then me jo bhi work like a network or file se data ka sara kam yhan par hota he.
// value rerurn hoti.
// reslove inside object value pass on the .then function(user).
promiseThree.then(function (user) {
    // console.log(user);
    // console.log(user.UserName);
})

// declered promise part : 4
// applying for a chaining rule as  then.

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = true; // if error true/false so check condition

        if (!error) {
            resolve({   
                userName: "bhavesh",
                password: "1234"
            });

        } else {

            reject('Earror Something Want Wrong');
        }

    }, 1000)
})

promiseFour.then(function (user) {
    // console.log(user);
    return user.userName

}).then(function (userName) {
    // console.log(userName);

}).catch(function (error) {
    // console.log(error);
    
}).finally(function(){
    // console.log("promise is either resolve or rejected. ");
})

// form of the arrow function.

// const promiseFour1 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = true; // if error true/false so check condition
//         if (!error) {
//             resolve({   
//                 userName: "bhavesh",
//                 password: "1234"
//             });
//         } else {
//             reject('Earror Something Want Wrong');
//         }
//     }, 1000)
// })
// promiseFour1.then( (user) => {
//     console.log(user);
//     return user.userName
// }).then( (userName) => {
//     console.log(userName);
// }).catch( (error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("promise is either resolve or rejected. ");
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout( () => {
                let error = true; // if error true/false so check condition
                if (!error) {
                    resolve({   
                        userName: "bhavesh",
                        password: "1234"
                    });
                } else {
                    reject('Error: js Something Want Wrong');
                }
            }, 1000)
})

// show the error  if DB connectivity is true if false then show to earror.
// async function consumePromiseFive(){
//   const response =   await promiseFive;  // this is a object
//   console.log(response);
// }
// consumePromiseFive()

// the solution for earror: beacuse asyc can not direct handle dtho the error.

async function consumePromiseFive(){
    try{
        // jhan par time consume hota he vhan par await lagana padega.
        const response =   await promiseFive;  // this is a object
        //   console.log(response);
    }
    catch(error){
        // console.log(error);
    }
}
consumePromiseFive()


// *************************************************************************************************************************************
// ############################### Fatch() ###################################

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         console.log(response);

//         // const data = response.json();   // this is a panding state so fatch data which form of the json it is take to await.
//         const data =await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser()


// formate of then form of fatch()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    return data.followers
})
.then((followers)=>{
    console.log(followers);
})
.catch((error)=>{
    console.log(error);
})