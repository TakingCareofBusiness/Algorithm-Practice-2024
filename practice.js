//for (let i = 0; i < 7; i++) {
//console.log(i);
//}
//let x = [1, 2, 3, 4];
//x.forEach((i) => console.log(i));

//let HP = 100;
//while (HP > 0) {
//console.log("select fight command");
//console.log("randomly select enemy command");
//console.log("subtract health");
//}
let n = 4;
function factorsOfN(n) {
  let result = 1;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
function factorialOfN(n) {
  if (n <= 0) {
    return "negative number or 0";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
factorsOfN(n);
console.log(factorialOfN(n));
