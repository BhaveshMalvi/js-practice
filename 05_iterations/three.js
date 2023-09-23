// *************** For In Loop ***************** 
//  use only for a non iterator values as also applicable to { key : 'value'} object


const myOBJ = {
    spy : 'spiderMan',
    bat : "batMan",
    ant : "antMan",
    iro : "IronMan"
}

for (const key in myOBJ) {
        console.log(key);
}

for (const key in myOBJ) {
    console.log(key, myOBJ[key]);
}
