// CODEWARS LINK: https://www.codewars.com/kata/simple-fun-number-165-withdraw/javascript

// MY SOLUTION:

function withdraw(amount) {
  console.log(amount);
  let combinations = [];
  for (let i = 0; i < 200; i++) {
    for (let x = 0; x < 200; x++) {
      for (let y = 0; y < 200; y++) {
        if (i * 100 + x * 50 + y * 20 === amount) {
          combinations.push([i, x, y]);
          console.log(i, x, y);
        }
      }
    }
  }
  return combinations[combinations.length - 1];
}

// TOP-RATED 'BEST PRACTICE' SOLUTION:

function withdraw(n) {
  if (n % 100 == 0) return [n / 100, 0, 0];
  else if (n % 50 == 0) return [(n - 50) / 100, 1, 0];
  else if (n % 20 == 0) return [~~(n / 100), 0, (n % 100) / 20];
  else return [~~((n + 50) / 100) - 1, 1, ((n + 50) % 100) / 20];
}

function withdraw(n) {
  var x = n % 20;
  n = n / 20 - x / 4;
  return [(n / 5) | 0, x % 3, n % 5];
}
