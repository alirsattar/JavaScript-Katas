// IN PROGRESS, TRYING TO SOLVE KATA 'MULTIPLYING NUMBERS AS STRINGS': https://www.codewars.com/kata/multiplying-numbers-as-strings

function multiply(a, b){
    var a1 = a.toString().split("").reverse();
      var a2 = b.toString().split("").reverse();
      var aResult = new Array;
      for ( var iterNum1 = 0; iterNum1 < a1.length; iterNum1++ ) {
          for ( var iterNum2 = 0; iterNum2 < a2.length; iterNum2++ ) {
              var idxIter = iterNum1 + iterNum2;
              aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );
              if ( aResult[idxIter] > 9 ) {
                  aResult[idxIter + 1] = Math.floor( aResult[idxIter] / 10 ) + ( idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1] );
                  aResult[idxIter] %= 10;
              }
          }
      }
      var finalAnswer = aResult.reverse().join("");
      while (finalAnswer.charAt(0) == '0') {
        if (finalAnswer.length == 1) { break };
        if (finalAnswer.charAt(1) == '.') { break };
        finalAnswer = finalAnswer.substr(1, finalAnswer.length-1)
      }
      return finalAnswer;
}

// HIGHEST RATED 'BEST PRACTICES' SOLUTION:

function multiply(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();
  
    var stack = [];
  
    for (var i = 0; i < aa.length; i++) {
      for (var j = 0; j < bb.length; j++) {
        var m = aa[i] * bb[j];
        stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
      }
    }
  
    for (var i = 0; i < stack.length; i++) {
      var num = stack[i] % 10;
      var move = Math.floor(stack[i] / 10);
      stack[i] = num;
  
      if (stack[i + 1])
        stack[i + 1] += move;
      else if (move != 0)
        stack[i + 1] = move;
    }
  
  
    return stack.reverse().join('').replace(/^(0(?!$))+/, "");
  }