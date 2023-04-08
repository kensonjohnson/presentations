// You are given an array where each element in the array is either
// an integer or another array of the same structure.

// Your task is to multiply each integer by its DEPTH in the array,
// where the depth is the level of nesting, and then return the SUM
// of all those integers.

// The depth value starts at 1 and increments for each level of nesting.
// Example:
// Input: depthList = [1, [1]]
// Output: 3
// Explanation: The first element is a 1. We are currently at the base level,
// so depth is 1. We multiply by depth and 1 * 1 = 1. Our next element is an
// array, so we are now at depth level 2. This array has one element which
// is also the integer 1. We multiply by depth and 2 * 1 = 2. Now we sum
// all integers and we get 1 + 2 = 3.

const data = [1, [1, [1]], 5, [3], [2]]; // Expect 21
const empty = []; // Expect 0
const allNums = [1, 2, 3, 4, 5]; // Expect 15

function depthSum(element, level = 1) {
  let integerSum = 0;
  // filter out the nested arrays into a sub-array
  element.forEach((element) => {
    if (typeof element === "number") return (integerSum += element * level);
    integerSum += depthSum(element, level + 1);
  });

  return integerSum;
}

function depthSumWithReducer(array, level = 1) {
  return array.reduce((sum, element) => {
    if (typeof element === "number") return sum + element * level;
    return sum + depthSumWithReducer(element, level + 1);
  }, 0);
}

console.log(depthSum(data));
console.log(depthSumWithReducer(data));
console.log(depthSum(empty));
console.log(depthSumWithReducer(empty));
console.log(depthSum(allNums));
console.log(depthSumWithReducer(allNums));
