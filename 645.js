var findErrorNums = function(nums) {
  let pre = new Array(nums.length).fill(0);
  for(let i = 0; i < nums.length; i++) {
    pre[nums[i]-1]++;
  }
  let repeatedNumder = 0;
  let leftOutNumber = 0;
  for(let i = 0; i < pre.length; i++) {
    if(pre[i] == 2) {
      repeatedNumder = i+1;
    }
    if(pre[i] == 0) {
      leftOutNumber = i+1;
    }
  }
  return [repeatedNumder, leftOutNumber]
};
const nums = [3,2,1,4,4,5]
console.log(findErrorNums(nums));

// easy but little tricky 
// hint for it will be it is not sorted and any number can be duplicated and any other can be left out , not only adjacent or prev one
// focus on constraints too