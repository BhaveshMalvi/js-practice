// ***************** For Of ******************** 
// only applying mostly in Array [].
// valied only a iterable keyword not apply any others.
// like a  ["value"] =   iterator 
// and    { key : "value" } = not a iterator 
// syntax 
// for (const iterator of object) {
    
// }

// [""],[""],[""]
// [{}],[{}],[{}]


// const number  =[1,2,4,5,6,7,8]
// for (const item of number) {
//     console.log(item);
// }

const arrHero = ["spiderMan","batMan", "ironMan","hulk"]
for (const item of arrHero) {
    console.log(`${item}`);
}

const map = new Map()
map.set("spy", "spiderMan")
map.set("bat" ,"batMan")
map.set("iro", "ironMan")
map.set("ant","antMan")

for (const [key,value] of map) {
    console.log(key, ":", value);
}


const myOBJ = {
    spy : 'spiderMan',
    bat : "batMan",
    ant : "antMan",
    iro : "IronMan"
}

// for (const [key,val] of myOBJ) {
//     console.log(key, ":-", val);
// }