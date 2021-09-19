const findKey = function (object, callback) {
  const objectKeys = Object.keys(object);
  for (let key in objectKeys) {
    if (callback(objectKeys[key])) {
      return objectKeys[key];
    }
  }

  return `couldnt find find key, key = ${undefined}`;
}


console.log(findKey({66: 'a', 99: 'b'}, function (x) {
  return (x == 99)
}));

