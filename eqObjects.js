const eqArrays = function (a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(key)) {
      if (object1[key].length === object2[key].length) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
    }
    else {
      return (object1[key] === object2[key]);
    }
  }
  return true;
}




// **** FIX ME
// const cd = { c: "1", d: ["23", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false




