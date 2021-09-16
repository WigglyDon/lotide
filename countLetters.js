const countLetters = function (inputString) {
  let countLetters = {};

  for (let char of inputString) {
    if (countLetters[char]) {
      countLetters[char] += 1;
    } else {
      countLetters[char] = 1;
    }
  }
  return countLetters
}