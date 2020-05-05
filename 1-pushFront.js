/* PUSH FRONT
 * Given an array and an additional value, insert this value at the
 * beginning of the array. Do this without using any built-in array methods.
 */
const pushFront = (arr, val) => {
  let lastEl = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[arr.length] = lastEl;
  arr[0] = val;

  console.log(arr);
  return arr;
};

pushFront([33, 66, 87, 23, 99, 2, 3, 4, 56, 22, 51, 32], 1);
