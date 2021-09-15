const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔  Assertion failed: ${actual} != ${expected}`);
  }
};


//function compares arrays
const eqArrays = function(array1, array2) {
  return Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.length === array2.length &&
  array1.every((val, index) => val === array2[index]);

  
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 4, 3]), true);
assertEqual(eqArrays([1, -5, 3], [1, 252525, 3]), true);
assertEqual(eqArrays([1, 'dsfg', 3], [1, 2, 3]), true);
