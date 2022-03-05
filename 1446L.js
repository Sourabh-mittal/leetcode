var maxPower = function (s) {
  let max1 = 1;
  let prev = s[0];
  let max2 = 0;
  for (let i = 1; i < s.length - 1; i++) {
    if (prev == s[i]) {
      console.log(max1);
      max1++;
    } else {
      prev = s[i];
      max2 = max1;
      max1 = 1;
    }
  }
  return max2;
};

const s = "abbcccddddeeeeedcba";
console.log(maxPower(s));
