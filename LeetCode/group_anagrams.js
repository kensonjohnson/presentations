// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return
// the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly
// once.

// Example 1:
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
const strs2 = [""];
// Output: [[""]]

// Example 3:
const strs3 = ["a"];
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {};

// Tests:
console.log(groupAnagrams(strs1)); // Expect ≈ [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs2)); // Expect [[""]]
console.log(groupAnagrams(strs3)); // Expect [["a"]]
