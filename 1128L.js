var numEquivDominoPairs = function (dominoes) {
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (
        (dominoes[i][0] == dominoes[j][0] &&
          dominoes[i][1] == dominoes[j][1]) ||
        (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0])
      ) {
        count++;
      }
    }
  }
  return count;
};

const dominoes = [
  [1, 2],
  [1, 2],
  [2, 1],
  [1, 2],
  [2, 2],
];

console.log(numEquivDominoPairs(dominoes));

// so this prob was easy u just needed to match pairs
// main point abt this i think is u need to give count of pairs not an individuals
