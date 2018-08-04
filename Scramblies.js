// CodeWars link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Description:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My Solution:

function scramble(str1, str2) {
      var origLength = str1.length;
      var newArray = [];
      if(str1.length > 1000) {return false};
      for(let i = 0, l = str1.length; i < l; i++){
    //     if(str1.length < str2.length) return false;
        if (str1.includes(str2.charAt(i))){
          newArray.push(str2.charAt(i));
          str1 = str1.replace(`${str2.charAt(i)}`,'');
        }
      }
      
      return str2.length == origLength - str1.length;
}

// Notes: adding if statement to weed out excessively long strings for efficiency doesn't seem to be working, so went with hacky limit of 1k characters.

// Alex's Way Better Solution (Executes in ~10s):

function scramble(str1, str2) {
    let chars = {};
   
    for (x of str1.split(''))
      chars[x] = (chars.hasOwnProperty(x) ? chars[x] : 0) + 1;
    //                                    ^-- this translates to " if(chars.hasOwnProperty(x){chars[x]+1} else {0 + 1}) "
                                        //    he's checking to see if the chars object already has this property;
                                        //    if it doesn't, he adds it and sets it to 1, but if it does he adds 1 to that.
                                        //    this lets him develop a running count of how many times the letter has occurred.
     
    for (x of str2.split('')) {
      if (!chars.hasOwnProperty(x) || chars[x] <= 0) return false; // <-- here he's looping through the entire array once he's
      chars[x]--;                                                  //     created his count of all characters and how often
    }                                                              //     they occur. if any letter doesn't occur in the first
                                                                   //     string, he immediately returns false; if it does occur,
    return true;                                                   //     he subtracts it from the letters array and proceeds to
}                                                                  //     the return true line.