// ANNOYING TRIVIAL KATA DONE JUST TO TICK OVER TO 5 KYU.

// KATA URL: https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// MY SOLUTION:

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!"
  ];

  var respond;

  //  number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]))

  if (number <= 10) {
    respond = dogs[0];
  } else if (number <= 50) {
    respond = dogs[1];
  } else if (number < 101) {
    respond = dogs[2];
  } else if (number === 101) {
    respond = dogs[3];
  }

  return respond;
}

howManyDalmatians(101);

// HIGHEST RATED 'BEST PRACTICE' SOLUTION:
function howManyDalmatians(number) {
  if (number <= 10) {
    return "Hardly any";
  } else if (number <= 50) {
    return "More than a handful!";
  } else if (number === 101) {
    return "101 DALMATIANS!!!";
  } else {
    return "Woah that's a lot of dogs!";
  }
}
