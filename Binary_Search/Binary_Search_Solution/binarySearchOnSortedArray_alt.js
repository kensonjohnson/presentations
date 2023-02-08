import { mock1, mock2, mock3 } from "../sampleArrays.js";

function binarySearch(array, value) {
  let start = 0;
  let end = array.length;

  while (start <= end) {
    const midpoint = Math.round((start + end) / 2);

    // if midpoint is our value, return midpoint
    if (array[midpoint] === value) {
      return midpoint;
    }

    // determine whether to go left or right
    if (value > array[midpoint]) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }

  return null;
}

console.log(binarySearch(mock2, 83));
console.log(binarySearch(mock2, 84));
