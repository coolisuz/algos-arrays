/*
INSERT AT
Given an array, index, and additional value, insert the value into array at 
given index. Do this without using built-in array methods. You can think of 
pushFront(arr,val) as equivalent to insertAt(arr,0,val).
*/

const insertAt = (arr, ind, val) =>{
  arr[arr.length] = val;
  for (var x = arr.length - 1; x > ind; x--) {
    var temp = arr[x];
    arr[x] = arr[x - 1];
    arr[x - 1] = temp;
  }
  console.log(arr)
  return arr;
}
insertAt([1,2,4,4,5], 2, 3);