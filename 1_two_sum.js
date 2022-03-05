function twoSum(nums, target) {
  const rev_num = {};
  for (let i = 0; i < nums.length; i++) {
    const counter = target - nums[i];
    if (rev_num[counter] !== undefined) {
      return [rev_num[counter], i + 1];
    }
    rev_num[nums[i]] = i + 1;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
