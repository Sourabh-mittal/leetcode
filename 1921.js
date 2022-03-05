var eliminateMaximum = function (dist, speed) {
  let total = 0;
  let kill = true;
  let max = 0;

  for (let j = 0; j < dist.length; j++) {
    if (dist[j] > max) {
      max = dist[j];
    }
  }

  for (let j = 0; j < max; j++) {
    for (let i = 0; i < dist.length; i++) {
      if (dist[i] > 0) {
        if (dist[i] <= speed[i]) {
          if (kill == false) {
            return total;
          }
          dist[i] = 0;
          total++;
          kill = false;
        } else {
          dist[i] -= speed[i];
        }
      }
    }
    kill = true;
  }

  return total;
};

const dist = [1, 3, 4];
const speed = [1, 1, 1];

console.log(eliminateMaximum(dist, speed));
