// CodeWars link: https://www.codewars.com/kata/5629db57620258aa9d000014

// My Solution:

function mix(s1, s2) {
    let chars1 = {};
    let chars2 = {};
    let string1 = s1.replace(/[^a-z]+/g,'').split('');
    let string2 = s2.replace(/[^a-z]+/g,'').split('');
    let substrings = [];
    let whichString = 0;
    for(x of string1){
        chars1[x] = (chars1.hasOwnProperty(x) ? chars1[x] : 0) + 1;
    }
    for(x of string2)
    chars2[x] = (chars2.hasOwnProperty(x) ? chars2[x] : 0) + 1;
    for (var z in chars1){
    if((!chars2[z] && chars1[z] > 1) || (chars1[z] > chars2[z] && chars1[z] > 1)){
        whichString = 1;
        substrings.push(`${whichString}:${z.repeat(chars1[z])}`);
    }
    }
    for (var y in chars2){
    if((!chars1[y] && chars2[y] > 1) || (chars2[y] > chars1[y] && chars2[y] > 1)){
        whichString = 2;
        substrings.push(`${whichString}:${y.repeat(chars2[y])}`);
    } else if (chars1[y] === chars2[y] && chars2[y] > 1){
        whichString = '=';
        substrings.push(`${whichString}:${y.repeat(chars2[y])}`);
    }
    }
    substrings.sort(function(a,b){
    if(a.length > b.length){
        return -1;
    } else if (b.length > a.length){
        return 1;
    } else {
        if(a < b){
        return -1;
        } else if (b < a){
        return 1;
        } else {
        return 0;
        }
    }
    })
    substrings = substrings.join('/');
    return substrings;
}

// Highest rated 'Best Practice' solution:

function mix(s1, s2) {
    var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
    s1 = counter(s1); s2 = counter(s2);
    var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
    keys.forEach(key => {
        var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
        if (count>1) {
        var from = [1, '=', 2][Math.sign(c2-c1)+1];
        var str = [...Array(count)].map(_=>key).join('');
        res.push(from+':'+str);
        }
    });
    return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}