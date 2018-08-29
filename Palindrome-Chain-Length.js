// MY SOLUTION:

var palindromeChainLength = function(n) {
    if(n === Number(n.toString().split('').reverse().join(''))){
    return 0;
    }
    let stepCounter = 0;
    let theNumReversed = Number(n.toString().split('').reverse().join(''))
    while(stepCounter < 50){
      stepCounter++;
      n += theNumReversed;
      theNumReversed = Number(n.toString().split('').reverse().join(''));
      if (n === theNumReversed){
        return stepCounter;
      }
    }
  };
  
  palindromeChainLength();