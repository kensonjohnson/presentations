// This function generates a sorted array filled with random whole numbers
// Usage: createSortedNumbersArray(howMany, maxValue) -> number[]
// howMany determines the number of elements in the created array,
// and values will be between 0 and maxValue.

function createSortedNumbersArray(howMany, maxValue) {
  const numbers = [];
  for (let i = 0; i < howMany; i++) {
    const number = Math.floor(Math.random() * maxValue);
    numbers.push(number);
  }
  numbers.sort((a, b) => {
    return a - b;
  });

  return numbers;
}
