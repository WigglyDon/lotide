

const letterPositions = function (inputString) {
  let results = {};
  for (let i = 0; i < inputString.length; i++) {
    if (results[inputString[i]]) {

      results[inputString[i]].push(i);

    } else {
      results[inputString[i]] = [i];
    }
  } return results;
}

console.log(letterPositions("Wiggly Donnie"));
