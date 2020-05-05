/*
    Remove Duplicates

    Sara is looking to hire an awesome web developer and has received 
    applications from various sources. Her assistant alphabetized them but 
    noticed some duplicates. Given a sorted array, remove duplicate values. 
    Because array elements are already in order, all duplicate values will be 
    grouped together. As with all these array challenges, do this without using 
    any built-in array methods.

*/

// const removeDups = arr => {
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === arr[i + 1]) {
//             for(let j=i; j<arr.length; i++){
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j]
//                 arr[j] = temp
//                 arr.pop()
//             }
//         }
//     }
//     console.log(arr)
//     return arr
// }

const removeDups = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      for (let j = i; j < arr.length - 1; j++) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    arr.pop();
  }
  console.log(arr);
};
// removeDups(['a', 'a', 'b', 'a', 'c','c',55,55]);
