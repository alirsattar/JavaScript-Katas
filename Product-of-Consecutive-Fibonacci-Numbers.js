// KATA URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a

// MY SOLUTION:

function productFib(prod){
    function fibonacci(num){
      var a = 1, b = 0, temp;
      while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
      }
      return b;
    }
    for(let i = 0; i < 500; i++){
      if(fibonacci(i) * fibonacci(i+1) >= prod){
        return [fibonacci(i), fibonacci(i+1),
        (fibonacci(i) * fibonacci(i+1) === prod)];
      }
    }
  }

// HIGHEST-RATED BEST PRACTICES SOLUTION:

function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
  }