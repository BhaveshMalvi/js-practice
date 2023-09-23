//  The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. 

// fetch API me jab apko error code 404 milega vo kha par milega. resolve ya reject me milega ????
//Error 404 always response me hi milega. this is not a error it is request accept as network.

// more etails link : https://developer.mozilla.org/en-US/docs/Web/API/fetch
// first priority is very high after setTimeOut, setInterval .


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

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {

    return response.json()

}).then((data) => {

    console.log(data);
    return data.followers

}).then((followers) => {

    console.log(followers);

}).catch((error) => {
    
    console.log(error);
})