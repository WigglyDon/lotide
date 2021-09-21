const middle = function (array) {
  let middle = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      middle.push(array[Math.floor(array.length / 2)]);
    }
    if (array.length % 2 === 0) {
      middle.push(array.length / 2);
      middle.push(array.length / 2 + 1);
    }
  }
  return middle;
}

module.exports = middle;

