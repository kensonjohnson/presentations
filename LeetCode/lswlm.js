// 2389. Longest Subsequence With Limited Sum

// You are given an integer array nums of length n, and an integer array
// queries of length m.

// Return an array answer of length m where answer[i] is the maximum size
// of a subsequence that you can take from nums such that the sum of its
// elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by
// deleting some or no elements without changing the order of the remaining
// elements.

// Example 1:
const nums1 = [4, 5, 2, 1],
  queries1 = [3, 10, 21];
// Output: [2,3,4]
// Explanation: We answer the queries as follows:
// - The subsequence [2,1] has a sum less than or equal to 3. It can be proven
// that 2 is the maximum size of such a subsequence, so answer[0] = 2.
// - The subsequence [4,5,1] has a sum less than or equal to 10. It can be
// proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
// - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be
// proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

// Example 2:
const nums2 = [2, 3, 4, 5],
  queries2 = [1];
// Output: [0]
// Explanation: The empty subsequence is the only subsequence that has a
// sum less than or equal to 1, so answer[0] = 0.

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let answer = [];
  const n = nums.length;
  // sort nums, lowest to highest
  nums.sort((a, b) => {
    return a - b;
  });
  // iterate over queries
  queries.forEach((query) => {
    // iterate over nums
    let howManyElements = 0;
    let index = 0;
    while (query > 0 && index < n) {
      // subtrack from our given query number, until < 0
      query -= nums[index];
      if (query < 0) {
        break;
      }
      howManyElements++;
      index++;
    }
    answer.push(howManyElements);
  });
  return answer;
};

// Tests:
console.log(answerQueries(nums1, queries1)); // Expect [2,3,4]
console.log(answerQueries(nums2, queries2)); // Expect [0]
