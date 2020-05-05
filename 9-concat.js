const concat = (...arr1) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = arr1[i];
    for (let j = 0; j < arr.length; j++) {
      newArr.push(arr[j]);
    }
  }
  return { newArr, arr1 };
};

console.log(concat(['a','b','c'], [1,2,3]))
