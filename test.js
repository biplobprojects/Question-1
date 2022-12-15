const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

//................................FIRST APPROACH................................................................
let arrRotation = (arr, numberOfShifts) => {
  for (let i = 0; i < numberOfShifts; i++) {
    arr.unshift(arr.pop());
  }
};
arrRotation(nums, k);
console.log(nums);


//......................................SECOND METHOD..........................................................

let arrRotation = (arr, numberOfShifts) => {
  let deletedArray = arr.splice(arr.length - numberOfShifts);

  for (let i = 0; i < deletedArray.length; i++) {
    arr.splice(i, 0, deletedArray[i]);
  }
};
arrRotation(nums, k);
console.log(nums);
