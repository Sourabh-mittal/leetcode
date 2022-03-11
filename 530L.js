const root = [1,0,48,null,null,12,49];

var getMinimumDifference = function(root) {
  root.sort();
  return root[1] - root[0];
};

console.log(getMinimumDifference(root));