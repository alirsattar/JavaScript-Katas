// Kata URL: (COULDN'T FIND THIS EXACT KATA ON CODEWARS)

// MY SOLUTION:

function encodeResistorColors(ohmsString) {
  let original = ohmsString.split(" ")[0];
  original = original.split("");
  console.log(original);
  let power = 0;
  let firstTwo = "";
  let str = ohmsString.split(" ")[0].split("");
  let result = "";
  const bands = {
    0: "black ",
    1: "brown ",
    2: "red ",
    3: "orange ",
    4: "yellow ",
    5: "green ",
    6: "blue ",
    7: "violet ",
    8: "gray ",
    9: "white "
  };
  if (original.includes("k")) {
    firstTwo = original.split("k")[0];
    if (firstTwo.includes(".")) {
      firstTwo = firstTwo.split(".");
    } else {
      firstTwo = firstTwo.toString().split("");
    }
    if (firstTwo.length < 2 && firstTwo[0].length != 2) {
      firstTwo.push(0);
    } else if (firstTwo.length > 2) {
      while (firstTwo.length > 2) {
        firstTwo.pop();
      }
    }
    firstTwo = firstTwo.join("");
    original = original.split("");
    original.pop();
    original = original.join("");
    original = original * 1000;
  } else if (original.includes("M")) {
    original.pop();
    firstTwo = original;
    if (firstTwo.includes(".")) {
      firstTwo = firstTwo.join("");
    } else {
      firstTwo = firstTwo.toString().split("");
    }
    if (firstTwo.length < 2 && firstTwo[0].length != 2) {
      firstTwo.push(0);
    }
    // else if (firstTwo.length > 2){
    //   while(firstTwo.length > 2){
    //     firstTwo.pop();
    //   }
    // }
    console.log("~~~~~~~~~~~~~~", firstTwo);
    // firstTwo = firstTwo.join('');
    // original = original.join('');
    original = (firstTwo * 1000000).toFixed();
  } else {
    firstTwo = original.split("");
    if (firstTwo.length > 2) {
      firstTwo.pop();
    }
    firstTwo = firstTwo.join("");
  }
  switch (original.toString().split("").length) {
    case 2:
      power = 0; // black
      break;
    case 3:
      power = 1; // brown
      break;
    case 4:
      power = 2; // red
      break;
    case 5:
      power = 3; // orange
      break;
    case 6:
      power = 4; // yellow
      break;
    case 7:
      power = 5; // green
      break;
    case 8:
      power = 6; // blue
      break;
    case 9:
      power = 7; // violet
      break;
    case 10:
      power = 8; // gray
      break;
    case 11:
      power = 9; // white
      break;
  }
  if (!str.includes("k") && !str.includes("M")) {
    for (i of firstTwo) {
      console.log(i);
      result += bands[i];
    }
  } else if (str.includes("k") && !str.includes("M")) {
    for (i of firstTwo) {
      result += bands[i];
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", i);
    }
  } else if (str.includes("M")) {
    for (i of firstTwo) {
      result += bands[i];
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", i);
    }
  }
  result += bands[power];
  result += "gold";
  console.log("=================", result);
  return result;
}

// encodeResistorColors("2M ohms") === 'red black green gold';

// 4.7k ohms        'yellow violet red gold'      works
// encodeResistorColors("4.7k ohms") === 'yellow violet red gold';

// "10 ohms"      "brown black black gold"      works
// encodeResistorColors("10 ohms") === "brown black black gold";

// "100 ohms"      "brown black brown gold"      works
// encodeResistorColors("100 ohms") === "brown black brown gold";

// "1k ohms"      "brown black red gold"        works
// encodeResistorColors("1k ohms") === "brown black red gold";

// "10k ohms"      "brown black orange gold"     works
// encodeResistorColors("10k ohms") === "brown black orange gold";

// "22k ohms"      "red red orange gold"         works
// encodeResistorColors("22k ohms") === "red red orange gold";

// "47k ohms"      "yellow violet orange gold"   works
// encodeResistorColors("47k ohms") === "yellow violet orange gold";

// "100k ohms"      "brown black yellow gold"     works
// encodeResistorColors("100k ohms") === "brown black yellow gold";

// "330k ohms"      "orange orange yellow gold"   works
// encodeResistorColors("330k ohms") === "orange orange yellow gold";

// "2M ohms"      "red black green gold"        works
// encodeResistorColors("2M ohms") === "red black green gold";

// 51M ohms 'green brown blue gold'
// encodeResistorColors("51M ohms") === "green brown blue gold";

// 840M ohms 'gray yellow violet gold'
// encodeResistorColors("840M ohms") === "gray yellow violet gold";

// 39M ohms  'orange white blue gold'
// encodeResistorColors("840M ohms") === "gray yellow violet gold";

// 8.3M ohms 'gray orange green gold'
encodeResistorColors("8.3M ohms") === "gray orange green gold";
