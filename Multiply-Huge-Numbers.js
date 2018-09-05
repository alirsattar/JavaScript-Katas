// IN PROGRESS, TRYING TO SOLVE KATA 'MULTIPLYING NUMBERS AS STRINGS': https://www.codewars.com/kata/multiplying-numbers-as-strings

function multiply(a, b){

    const string1Split = a.split('')
    .reverse();
    const string2Split = b.split('')
    .reverse();
  
    let theSum = [];
    let remainder = '';
  
    for(let i = 0; i < string1Split.length; i++){
      console.log(`-------------- iteration # ${i} ------------------`);
      let prod = ((Number(string1Split[i] * string2Split[i]) + Number(remainder)).toString()).split('');
      console.log('~~~~~~~~~~~',(Number(string1Split[i] * string2Split[i]) + Number(remainder)))
      // console.log('----------- prod on 13: ',prod);
      // console.log('********** remainder on 14: ',remainder);
      if(prod.length > 1){
        remainder = prod[0];
        console.log(prod.splice(0,1));
        prod = prod.splice(0,1);
      }
      // console.log('==================== final prod on 19: ',prod.join(''));
      theSum.push(prod.join(''));
      // console.log('theSum: \n',theSum);
    }
  
    // console.log(theSum.join('').length);
  
    return theSum.join('');
  
  }
  
  multiply(
    '823094582094385190384102934810293481029348123094818923749817',
    '234758927345982475298347523984572983472398457293847594193837') ===
    
    
    '193228801196767580936937025179030242333589969343595453380648878181298632138525604729517840510039331578252599113191277829'