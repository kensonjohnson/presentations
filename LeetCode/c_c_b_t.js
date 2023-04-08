// Given the root of a binary tree, determine if it is a complete binary tree.

// In a complete binary tree, every level, except possibly the last, is completely
// filled, and all nodes in the last level are as far left as possible. It can have
// between 1 and 2h nodes inclusive at the last level h.

// Example 1:
// Input: root = [1,2,3,4,5,6]
// Output: true
// Explanation: Every level before the last is full (ie. levels with node-values
// {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as
// possible.

// Example 2:
// Input: root = [1,2,3,4,5,null,7]
// Output: false
// Explanation: The node with value 7 isn't as far left as possible.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  // setup a queue and initialize its value
  const queue = [root];
  // we want to look for a gap
  // we do this by keeping a record of the previousNodeNull
  let previousNodeNull = false;

  // iterate until queue is exhausted
  while (queue.length) {
    // grab the first node from the queue
    const node = queue.shift();

    // if this node is null
    if (!node) {
      // we want to set our previousNodeNull variable to true
      previousNodeNull = true;
      continue;
    }

    // if this node is valid and previous null
    if (previousNodeNull) {
      // tree not complete, return false
      return false;
    }

    // queue left and right children of current node
    queue.push(node.left, node.right);
  }

  // if we make it out of loop, no gaps, return true
  return true;
};
