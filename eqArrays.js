const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🛳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔  Assertion failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function (a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 4, 3]), true);
assertEqual(eqArrays([1, -5, 3], [1, 252525, 3]), true);
assertEqual(eqArrays([1, 'dsfg', 3], [1, 2, 3]), true);
