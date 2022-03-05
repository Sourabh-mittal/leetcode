var minOperations = function(logs) {
  let depth = 0;
  for(const log of logs) {
    if(log == "../" && depth != 0){
        depth--;
    }else if(log != "./" && logs[i] != "../") {
      depth++;
    }
  }
  return depth;  
};

const logs = ["d1/","d2/","./","d3/","../","d31/"];
// const logs = ["./","../","./"]

console.log(minOperations(logs))

// Main hint about this question is 
// 1. when we encounter "../" and we are already in main folder we will remain in main folder and will not decrease the counter
// 2. when we encounter any other file name except "../" and "./" we will increase the counter 
// why "../" u might be asking in second condition cuz when we are in main folder and the first condition will fail and comes to second than we have to check that it is other file name rather than "../" and "./" so we will increase the counter.