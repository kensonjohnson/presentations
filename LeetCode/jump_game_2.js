const nums = [2, 3, 0, 1, 4];
const nums2 = [0];
const nums3 = [1, 2, 3];
const nums4 = [1, 1, 1, 1];

var jump = function (nums) {
  let index = 0;
  let count = 0;
  // iterate over nums
  if (nums.length === 1) {
    return 0;
  }

  while (index < nums.length) {
    count++;
    // determine range that can jump
    let range = index + nums[index];
    let maxRangeFound = range;
    if (range >= nums.length - 1) {
      return count;
    }
    // decide which to jump to
    for (let i = index + 1; i <= range; i++) {
      if (i + nums[i] > range && i + nums[i] > maxRangeFound) {
        maxRangeFound = Math.max(maxRangeFound, i + nums[i]);
        index = i;
      }
    }
  }
  return count;
};
console.log(jump(nums));
console.log(jump(nums2));
console.log(jump(nums3));
console.log(jump(nums4));
