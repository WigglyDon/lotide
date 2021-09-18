const findKeyByValue = function (object, value) {
  return Object.keys(object).find(x => object[x] === value)
}


const testObject = {
  "a": 1,
  "b": 2,
  "c": 3
}

console.log(findKeyByValue(testObject), 1);


