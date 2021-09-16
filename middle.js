const middle = function (array) {
  let middle = [];
  let middleOdd = (array[(array.length / 2) - 0.5]);
  if (array.length > 2) {
    for (let i = 0; i < array.length; i++) {
      //even total push statement
      if (array.length / array[i] === 2) {
        middle.push(array[i]);
        middle.push(array[i + 1]);
      }
      //odd total push statement
      if (array.length % 2 !== 0) {
        return middleOdd;
      
      }

    }
  }
  return middle;
}

