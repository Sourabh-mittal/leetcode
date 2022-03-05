var removeElement = function (nums, val) {
  let k = nums.length;
  let oucc = nums.filter((num) => num != val);
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === oucc[i]) {
      curr++;
    }
    if (nums[i] === val) {
      nums[i] = oucc[curr];
      curr++;
    }
  }
  return nums;
};

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr, 2));
