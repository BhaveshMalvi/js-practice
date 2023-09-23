// ################### introduction of  Map ################################
// it is a operational values perform individual given dataBase form of the object/Array.
// like +,-,*,/ all perform tasks are in arrays.
// this is a perform a each of element given of database.
// Syntax
// map(callbackFn, thisArg)

const numbers = [4,2,5,6,7,3,2,3,4,7,8,9,10]

let num_map = numbers.map((op_val) => op_val*1000 )
console.log(num_map);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

function gst_val(op_val) {
    return Math.floor(op_val.price * 0.18)
}

function gst_add_val(op_val) {
    return (op_val.price +  Math.floor(op_val.price * 0.18))
}

//only show of a gstt value of all individual prices 
console.log(`only GST values`);
let gst = shoppingCart.map(gst_val)
console.log(gst);

// with all gst included gst prices
console.log(`with include GST value`);
let with_gst = shoppingCart.map(gst_add_val)
console.log(with_gst);



