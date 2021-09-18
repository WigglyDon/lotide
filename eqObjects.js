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


const eqObjects = function (object1, object2) {

  //converts keys and values into an array
  if (eqArrays(Object.keys(object1), Object.keys(object2))) {
    if (eqArrays(Object.values(object1), Object.values(object2))) {
      return true;
    }
  }
  return false;

}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(cd, dc)); //should be true

// const cd2 = { c: '1', d: ['2', 3, 4] };
// eqObjects(cd, cd2); //should be false;