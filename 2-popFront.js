/* POP FRONT
    Given an array, remove and return the value at the beginning of the array. 
    Do this without using any built-in array methods except pop().
*/

const popFront = arr => {
  const temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  console.log(arr);
  return temp;
};

popFront([1,2,3,4,5])
