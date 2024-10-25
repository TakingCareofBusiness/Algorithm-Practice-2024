//accept a value, run through each part of value, multiply based off of that
function binaryToDecimal(n) {
  let answer = 0;
  let x = 1;
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === "1") {
      answer = answer + x;
    }
    x = x * 2;
  }
  console.log(answer);
}
let n = "1011";
//accept the number, check if you can subtract 126, check if you can subtract 64, yadda yadda, for every yes print 1 every no print 0.
function decimalToBinary(o) {
  let answer = "";
  let y = o;
  let go = 0;
    while (y > 2) {
      if ((y % 2 === 0 ) && (go > 0)); {
        answer = answer + "0";
      } else {
        answer = answer + "1";
      }
      y = Math.floor(y / 2);
    }
    if (o % 2 === 0) {
      answer = answer + "0";
    } else {
      answer = answer + "1";
    }
    console.log(answer);
  }
let o = 30;
decimalToBinary(o);
//11/2 -> 5 `1
//5/2 2  1
//2   0   0
//0   0   1`
