/*
    Reverse
    Given a numerical array, reverse the order of values, in-place. The 
    reversed array should have the same length, with existing elements moved to 
    other indices so that order of elements is reversed. Working ‘in-place’ 
    means that you cannot use a second array – move values within the array 
    that you are given. As always, do not use built-in array functions 
    such as splice().
*/
const reverse = arr => {
  let count = 0;
  for (let i = arr.length - 1; i >= arr.length / 2; i--) {
    [arr[i], arr[count]] = [arr[count], arr[i]];
    count++;
  }
  console.log(arr);
};

reverse([1,2,3,4,5,6])
