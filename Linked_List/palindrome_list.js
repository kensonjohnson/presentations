var isPalindrome = (node) => {
  let values = [];
  while (node !== null) {
    values.push(node.val);
    node = node.next;
  }
  const firstString = values.join("");
  values.reverse();
  const secondString = values.join("");
  return firstString === secondString;
};
