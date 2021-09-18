const findKeyByValue = function (object, value) {
   let objectValues = Object.values(object);
   for (let i = 0; i < objectValues.length; i++) {
     if (objectValues[i] === value) {
       return Object.keys(object)[i];
     }
   }
  return undefined;
}


const testObject = {
  "a": 1,
  "b": 2,
  "c": 3
}

console.log(findKeyByValue(testObject, 1));
console.log(findKeyByValue(testObject, 2));
console.log(findKeyByValue(testObject, 3));
console.log(findKeyByValue(testObject, 4));



 
// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.


