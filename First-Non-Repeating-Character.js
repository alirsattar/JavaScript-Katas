// CodeWars Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

// My Solution:

function firstNonRepeatingLetter(s) {
    if(!s.length) return '';
    for(var x of s){
      if(s.toLowerCase().indexOf(x) === s.toLowerCase().lastIndexOf(x)
      && s.toUpperCase().indexOf(x) === s.toUpperCase().lastIndexOf(x)){
        return x;
      }
      else if (s.indexOf(x) !== s.lastIndexOf(x)){
        continue;
      } else {
      }
    }
        return '';
}

// Highest-rated Best Practices Solution:

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }