// ******************* ForEach Loop ********************** 
// (function() = {} it is a callback function not a name or stored declered 
// Array.forEach(function() {})
// Array.forEach(()=>{})
// suntax 
// ArrayName.forEach((item, index_numbers, full_Array)={
//     // expression 
// })

const arrHero = ["spiderMan","batMan", "ironMan","hulk"]

arrHero.forEach(function(value) {
    console.log(value);
}) 

// OR 

arrHero.forEach((item)=>{
    console.log(item);
})

// or special case

// const storeval = arrHero.forEach((item)=> (console.log(item)))
// console.log(storeval);

arrHero.forEach((item,index,fullvalues) => {
    console.log(item,index,fullvalues);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item,index) => {
    console.log(item.languageName,index);
})