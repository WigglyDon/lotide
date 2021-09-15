const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🛳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔  Assertion failed: ${actual} != ${expected}`);
  }
};

const without = function (source, itemsToRemove) {
  let filtered = [];
  //use nestec for loop to check each index of input against the entire filter

  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[i] !== itemsToRemove[k]) {
        filtered.push(source[i]);
      }
    }
  }
  return filtered;
}
