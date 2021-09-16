const countOnly = function (arrayInput, objectKey) {
  let returnObject = {};
  for (index of arrayInput) {
    if (objectKey[index]) {
      if (returnObject[index]) {
        returnObject[index] += 1;
      } else {
        returnObject[index] = 1;
      }
    }
  }
  return returnObject;
}
