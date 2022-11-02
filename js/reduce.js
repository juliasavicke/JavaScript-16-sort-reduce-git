"use strict";
console.log("reduce.js");

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 7, 1, 50, 12];

{
  let total = 0;
  nums.forEach((sk, i, arr) => {
    total += sk;
  });
  console.log("total ===", total);

  const rez = nums.reduce((total, sk, i, arr) => {
    console.log(`iteracija: ${i}, sk: ${sk}, total: ${total}`);

    return total + sk;
  }, 0);

  console.log("rez ===", typeof rez);

  const rez2 = nums.reduce((total, sk, i, arr) => {
    return nums.filter((sk) => sk > 10);
  }, 0);

  console.log("rez2 ===", rez2);
}

{
  const avgReduce = nums.reduce(
    (total, sk, i, arr) => total + sk / arr.length,
    0
  );
  console.log("avgReduce ===", avgReduce);
}

{
  const maxReduce = nums.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log("maxReduce ===", maxReduce);
}

let maxVal = nums[0];
nums.forEach((sk) => {
  maxVal = Math.max(maxVal, sk);
});
console.log("maxVal ===", maxVal);

const maxReduce2 = nums.reduce((max, sk) => {
  return Math.max(max, sk);
}, nums[0]);

console.log("maxReduce2 ===", maxReduce2);

const colors = ["red", "green", "blue", "yellow"];

const colEl = document.getElementById("list");
const htmlString = colors.reduce((acc, color) => {
  return acc + `<li>${color}</li>`;
}, "");

colEl.innerHTML = htmlString;
