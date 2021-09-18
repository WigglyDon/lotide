const findKey = function (object, callback) {
  const objectKeys = Object.keys(object);
  for (let i = 0; i < objectKeys.length; i++) {
    if (callback(object)) {
      return object[i];
    }
  }

  return undefined;
}

result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result1);



// It should scan the object 
// and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.



// //----------------------------------------------------------------------
// const findKeyByValue = function (object, value) {
//   let objectValues = Object.values(object);
//   for (let i = 0; i < objectValues.length; i++) {
//     if (objectValues[i] === value) {
//       return Object.keys(object)[i];
//     }
//   }
//  return undefined;
// }


// const testObject = {
//  "a": 1,
//  "b": 2,
//  "c": 3
// }

// console.log(findKeyByValue(testObject, 1));
// console.log(findKeyByValue(testObject, 2));
// console.log(findKeyByValue(testObject, 3));
// console.log(findKeyByValue(testObject, 4));




// // It should scan the object and return the first key which contains the given value. 
// // If no key with that given value is found, then it should return undefined.


