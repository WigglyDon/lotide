const map = function (array, callbackFunction) {
  const results = [];
  for (let item of array) {
    results.push(callbackFunction(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

console.log(results1);








