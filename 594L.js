const nums = [-3,-1,-1,-1,-3,-2];
var findLHS = function(nums) {
  let occuranceMap = new Map();
  let max_harmonious_array_length = 0;
  for(const num of nums) {
    if(occuranceMap.get(num) == undefined){
      occuranceMap.set(num, 1);
    } else {
      occuranceMap.set(num, (occuranceMap.get(num))+1);
    }
  } 
  for(const key of occuranceMap.keys()){
    if(occuranceMap.get(key+1)) {
      max_harmonious_array_length = Math.max(max_harmonious_array_length, occuranceMap.get(key)+occuranceMap.get(key+1));
    }
  }
  return max_harmonious_array_length;
};

console.log(findLHS(nums))  

// so this was a hard for me i couldn't do it 
// main hint for this was u gotta keep the occurance count of each unique element in the array
// then compare it with plus one count and find the max array length