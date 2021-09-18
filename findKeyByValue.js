const findKeyByValue = function (object, keyValue) {
  const values = Object.values(object);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === keyValue) {
      return Object.keys(object)[i];
    }
  }

  return undefined;
}