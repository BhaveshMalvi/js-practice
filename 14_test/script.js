const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, -5, -8, 2, -10];


function findPositive(arr) {

    let i = 0;
    while (i < arr.length) {
        if (arr[i] <= 0) {
            return false;
        }
        i++;
    }
    return true;
}


;
console.log(findPositive(arr1));
;
console.log(findPositive(arr2));
