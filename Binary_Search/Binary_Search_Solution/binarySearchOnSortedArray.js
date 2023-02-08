import { mock1, mock2, mock3 } from "../sampleArrays.js";

// Takes in a sorted array and a value to find,
// returns index of that value if it exists, else returns null
function binarySearch(array, value, start = 0, end = array.length) {
  // Base Cases
  // Our array is empty
  if (isEmpty(start, end)) {
    return null;
  }

  // The midpoint is our value
  const midpoint = createMidpoint(start, end);
  if (array[midpoint] === value) {
    return midpoint;
  }

  // Recursion

  // Before recursing
  // Check which side to recursively check
  if (goRight(value, array[midpoint])) {
    // Recurse
    return binarySearch(array, value, midpoint + 1, end);
  } else {
    // Recurse
    return binarySearch(array, value, start, midpoint - 1);
  }
}

function isEmpty(start, end) {
  if (start > end) {
    return true;
  }
}

function createMidpoint(start, end) {
  const midpoint = Math.round((start + end) / 2);
  return midpoint;
}

function goRight(lookingFor, currentlyAt) {
  if (lookingFor > currentlyAt) {
    return true;
  }
}

console.log(binarySearch(mock2, 83));
console.log(binarySearch(mock2, 84));
