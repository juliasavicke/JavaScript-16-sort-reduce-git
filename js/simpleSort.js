"use strict";
console.log("simpleSort.js");
const words = ["z", "a", "m", "h"];

const nums = [5, 10, 1, 50, 12];

console.log("words ===", words);
console.log("nums ===", nums);

words.sort();
console.log("words ===", words);

nums.sort();
console.log("nums ===", nums);

nums.sort((a, b) => a - b);
console.log("nums ===", nums);

nums.sort((a, b) => {
  const diff = a - b;
  if (diff > 0) {
    return 1;
  } else if (diff < 0) {
    return -1;
  } else if (diff === 0) {
    return 0;
  }
});
console.log("nums ===", nums);

nums.sort((a, b) => b - a);
console.log("nums ===", nums);
