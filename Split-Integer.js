// ASSESSMENT WAS TO SPLIT A GIVEN INTEGER INTO 6 EQUAL PARTS -- OR AS CLOSE AS POSSIBLE

// MY SOLUTION:

var splitInteger = function(num, parts) {
  const floor = Math.floor(num / parts);
  const ceil = Math.ceil(num / parts);
  const iterations = Math.pow(2, parts);
  let result = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i < parts; i++) {
    result.push(floor);
  }
  for (let i = result.length - 1; i >= 0; i--) {
    console.log(i);
    if (result.reduce(reducer) != num) {
      result.splice(i, 0, ceil);
      result.pop();
    } else {
      // console.log(result.sort());
      return result.sort();
      break;
    }
  }
  return result;
};

splitInteger(20, 6) === [3, 3, 3, 3, 4, 4];
