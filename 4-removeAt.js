/*
    Remove At
    Given an array and an index into array, remove and return the array value at 
    that index. Do this without using built-in array methods except pop(). 
    Think of popFront(arr) as equivalent to removeAt(arr,0).
*/

const removeAt = (arr, idx) => {
  if (arr.length < idx) return "Error";
  let poppedVal;
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) {
      poppedVal = arr[i];
      for (let j = i; j < arr.length; j++) {
        arr[j] = arr[j + 1];
      }
    }
  }
  arr.pop();
  return poppedVal;
};

console.log(removeAt([1,2,8,3,4,5], 5))
