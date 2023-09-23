// const coding = ["js", "php", "laraval", "ruby", "react js"]

// coding.forEach((val)=> {
//       console.log(val);
// })

// coding.forEach((item, index, arr ) => {
//     console.log(item,index,arr);
// })


// this is a formate of a database which is take a data of which database.

const database = [
    {
        heroName : "spiderman",
        pictureName : "spiderman"
    },
    {
        heroName : "batman",
        pictureName : "batman"
    },
    {
        heroName : "ironman",
        pictureName : "ironman"
    },
    {
         heroName :"" ,
         pictureName : ""
    },
    {
        heroName : "hulk",
        pictureName : "hulk"
    },
    {
        heroName : "captain America",
        pictureName : "captain America"
    }
]

console.log(typeof database);

database.forEach((item,index)=>{
    if (item.heroName == "") {
        console.log(`your given data is  not a found in index of ${index} Database`);
    }
    else{
        console.log(item.heroName,index);
    }
})

const isString = "";
console.log(typeof isString);