const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔  Assertion failed: ${actual} != ${expected}`);
  }
};

const tail = function(array) {
  //after testing I realize that the slice method returns a new value anyways,
  //so declaring this newArray variable was not necessary
  let newArray = array.slice(1);
  console.log(array);
  console.log(`first index chopped off: ${newArray}`);


  return newArray;
};




assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");