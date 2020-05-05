/*
    Second-Largest
    Return the second-largest element of an array. Given [42,1,4,Math.PI,7], 
    return 7. If the array is too short, return null.
*/

const secondLargest = arr => {
    if (arr.length < 2) return null;
    
    for (let i=0; i < arr.length - 1; i++) {
        for(let j=0; j<arr.length-1-i; j++){
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr[arr.length-2]
}


secondLargest([42, 1, 4, Math.PI,7]);

