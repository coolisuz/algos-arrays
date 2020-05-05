/*
    Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), 
    return 4. If the array is too short, return null.
 */


const nthelement = (arr, val) => {
    if (arr.length < 2) return null;

    let count = 0;
    for(let i=arr.length-1; i>=0; i--) {
        if (arr[i] === val) {
            return count
        }
        count++;
    }
    return 'Not found'
}


console.log(nthelement([5,2,3,6,4,9,7], 3))