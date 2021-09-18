const eqArrays = function (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => should be true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => should be false

// const keys1 = Object.keys(object1);
  // const keys2 = Object.keys(object2);
  // if (keys1.length !== keys2.length) {
  //   return false;
  // }
  // for (let key of keys1) {
  //   console.log(`line 18 key is : ${key}`);

  //   if (Array.isArray(keys1)) {
  //     if (object1[key].length === object2[key].length) {
  //       if (!eqArrays(object1[key], object2[key])) {
  //         return false;
  //       }
  //     }
  //   }
  //   else if (object1[key] !== object2[key]){
  //     console.log('1: ' + object1[key]);
  //     return false;
  //   }
  // }
  // console.log('2');
  // return true;




