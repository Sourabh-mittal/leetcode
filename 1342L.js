var numberOfSteps = function(num) {
  let count  = 0;
  if(num == 0) {
      return 0;
  }
  while(num > 0) {
      if(num%2==0) {
          num /= 2;
          count++;
      } else {
          num--;
          count++;
      }
  }
  return count;
};

// very easy question