import { mock1, mock2, mock3 } from "./sampleArrays.js";

// Create a function that takes in a sorted array of numbers and a
// value to look for.
// if it exists, return its index. If it doesn't exist, return null.

let iterativeActions = 0;
function iterativeSearch(array, value) {
  iterativeActions = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
    iterativeActions++;
  }
  return null;
}

// Create a function that takes in a sorted array of numbers and a
// value to look for.
// Break the problem down into smaller problems, and solve the smallest
// possible.
// if it exists, return its index. If it doesn't exist, return null.
let recursiveActions = 0;
function binarySearch(array, value, start = 0, end = array.length) {
  recursiveActions++;
  // Base Cases
  // if no elements in array
  if (start > end) {
    return null;
  }

  // calculate midpoint
  const mid = findMidpoint(start, end);
  // get the value at that mid
  const midValue = array[mid];

  // we found our value
  if (midValue === value) {
    return mid;
  }

  // move in left or right
  if (value < midValue) {
    // look left
    return binarySearch(array, value, start, mid - 1);
  }
  // right
  return binarySearch(array, value, mid + 1, end);
}

// function takes in two numbers and returns one number
function findMidpoint(start, end) {
  return Math.round((start + end) / 2);
}

iterativeSearch(mock1, 6);
console.log(iterativeActions);
iterativeSearch(mock2, 83);
console.log(iterativeActions);
iterativeSearch(mock3, 932);
console.log(iterativeActions);
binarySearch(mock1, 6);
console.log(recursiveActions);
recursiveActions = 0;
binarySearch(mock2, 83);
console.log(recursiveActions);
recursiveActions = 0;
binarySearch(mock3, 932);
console.log(recursiveActions);
