const insert = function(num){
    let isSorted = false;
    let placeholder = 0;
    let theNum = num;
    while(!isSorted){
        isSorted = true;
        for(let i = 1; i < theNum.length; i++){
            if(theNum[i-1] < theNum[i]){
                isSorted = false;
                placeholder = theNum[i-1];
                theNum[i-1] = theNum[i];
                theNum[i] = placeholder;
                console.log(placeholder);
            }
        }
    }
 return theNum.toString();   
}