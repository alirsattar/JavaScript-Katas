// Kata URL: https://www.codewars.com/kata/is-my-friend-cheating/javascript

// My Solution:

function removeNb (n) {
    let answers = [];
    let sum = ((n * n) + n) / 2;
    
    for (let a = 1; a <= n; a++) {
      let b = (sum - a) / (a + 1);
      if (b % 1 != 0 || b < 1 || b > n) continue;
        
      answers.push([a, b]);
    }
    
    return answers;
  }

// Highest Best Practice Solution:

function removeNb (n) {
    // from the instruction:
    // a * b = S(n) - a - b
    
    // and the sum of all first n natural numbers is
    // S(n) = n * (n + 1) / 2
    
    // so we can refrase the first formula like this:
    // a * b = n * (n + 1) / 2 - a - b
    // a * b + b = n * (n + 1) / 2 - a
    // b * (a + 1) = n * (n + 1) / 2 - a
    // b = (n * (n + 1) / 2 - a) / (a + 1)
    
    // but a and b are natural and up to n
    
    var results = [];
    for (var a = 1; a <= n; a++) {
      var b = (n * (n + 1) / 2 - a) / (a + 1);
      if (b % 1 === 0 && b <= n) results.push([a, b]);
    }
    return results;
  }