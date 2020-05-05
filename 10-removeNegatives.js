/*
    Remove Negatives
    Implement removeNegatives() that accepts an array, removes negative values, 
    and returns the same array (not a copy), preserving non-negatives’ order. 
    As always, do not use built-in array functions.
*/

const removeNegatives = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * -1
        }
    }
    console.log(arr)
    return arr
}

removeNegatives([1,2,-3,4,-5])