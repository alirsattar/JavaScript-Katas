// KATA URL: https://www.codewars.com/kata/53368a47e38700bd8300030d

// MY SOLUTION:

function list(names) {
  let nameString = "";
  if (names.length === 1) return names[0].name;
  if (names.length === 0) return "";
  for (let i = 0; i < names.length - 1; i++) {
    nameString += `${names[i].name}, `;
  }
  nameString = nameString.split("");
  nameString.splice(
    nameString.length - 2,
    2,
    ` & ${names[names.length - 1].name}`
  );
  nameString = nameString.join("");
  return nameString;
}

// HIGHEST RATED 'BEST PRACTICE' SOLUTION:

function list(names) {
  return names.reduce(function(prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}
