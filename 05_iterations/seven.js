// ####################  Introduction of Reduce Method #########################

// this Method is used to which is define all values in given Array total sum of value result show.

//Accumulator :The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// Current_value : The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

//initialValue: A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

 // Syntax 
// reduce(callbackFn, initialValue)

// Syntax
// const Array_name = [1,2,3,4,5,6,7,8,9,10]
// let initialvalue = 0;
// let new_reduce = Array_name.reduce((Accumulator, Current_value) => Accumulator + Current_value, initialvalue)
// console.log(new_reduce);

// O/P : store in form of these is 0+1+2+3+4+5+6+7+8+9+10 = 55;
//  official O/P is : 55  

// EX 
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10

const result = [45,67,78,75,96,45,67,47,94]
let total = 900

const reduce_result = result.reduce((acc, current_val) => acc + current_val, 0 )
// console.log(reduce_result);

const persentage = (reduce_result/total)*100

// console.log(persentage);

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

const price = shoppingCart.reduce( (acc, ini_val) => acc + ini_val.price, 0 )
console.log(price);
