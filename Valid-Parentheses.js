// KATA URL: https://www.codewars.com/kata/52774a314c2333f0a7000688

// MY SOLUTION:

function validParentheses(parens){
    var stack = [];
    for (var x of parens){
      if(x === '('){
        stack.push(x);
      } else if (x === ')' && !stack.length){
        return false;
      } else {
        stack.pop();
      }
    }
    return stack.length <= 0;
}

// HIGHEST RATED 'BEST PRACTICE' SOLUTION:

function validParentheses(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }