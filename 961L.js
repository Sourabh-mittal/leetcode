var repeatedNTimes = function (nums) {
  let arr = new Array(20000).fill(0);
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
      console.log(i);
    }
    if (arr[i] >= count) {
      count = arr[i];
      max = i;
    }
  }
  return max;
};
var repeatedNTimes1 = function (nums) {
  for (let i = 1; i <= 3; ++i) {
    for (let j = 0; j < nums.length - i; ++j) {
      if (nums[j] == nums[j + i]) {
        return nums[j];
      }
    }
  }
};
const nums = [
  40, 553, 6212, 6212, 6212, 5447, 6212, 5359, 6212, 3878, 6212, 4052, 2287,
  6212, 6212, 6212, 6212, 6212, 5716, 2298, 6212, 6212, 1290, 6212, 8245, 9243,
  4913, 2149, 6212, 6212, 6212, 5687, 8818, 6212, 9863, 6212, 6212, 3298, 6212,
  6212, 7006, 6212, 18, 914, 1846, 9108, 6212, 6212, 6212, 6212, 6212, 6212,
  5873, 783, 8653, 6212, 6212, 1363, 6212, 1819, 7245, 8811, 6212, 6212, 2860,
  6212, 472, 6212, 3016, 6212, 1732, 6212, 6212, 6212, 6212, 7494, 6212, 6212,
  6212, 5747, 5501, 6212, 6223, 6212, 7019, 2387, 3331, 1042, 5781, 1888, 6212,
  5973, 529, 6212, 8654, 4245, 6043, 2732, 2855, 2710, 8870, 6212, 6212, 6212,
  1641, 9530, 6212, 4430, 6212, 6212, 4346, 5015, 6212, 1623, 4304, 6186, 3753,
  6212, 6212, 8773, 6518, 3070, 6212, 7803, 6212, 6212, 6212, 9573, 7359, 5327,
  6212, 6212, 7466, 6212, 6212, 4867, 3052, 6212, 6212, 702, 6212, 6212, 6212,
  6212, 6212, 1531, 6222, 4064, 8794, 6212, 4548, 7174, 3733, 4397, 6388, 6212,
  5045, 6212, 1187, 6212, 6212, 6212, 6212, 9939, 313, 9676, 6212, 3514, 1951,
  6212, 6212, 3037, 6212, 1613, 9534, 6212, 6212, 6212, 6212, 6212, 6212, 81,
  6212, 6212, 6212, 6212, 6212, 1448, 636, 4562, 6212, 8396, 6212, 6212, 4166,
  7512, 6212, 6212, 1020, 6212,
];
console.log(repeatedNTimes1(nums));

// Main hint about this question is given array length is equal to the 2 times of repeated count and rather then the repeated number every other no. in array will be unique
// so will we have n+1 unique ele's and also the only one element is repeated n times, u won't be seeing any other no. that came twice in given arr.
// like if we have 2 repeated no it's length will be 4 , if it's 3 it will 6
// [1,2,3,2] [3,2,3,2,1,2]
//
