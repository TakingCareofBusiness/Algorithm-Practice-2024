function binaryToDec(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}

function toDecimal(binary) {
  const value = [128, 64, 32, 16, 8, 4, 2, 1];
  let count = 0;
  for (let i = 0; i <= 8; i++) {
    if (binary[i] === "1") {
      count += value[i];
    }
  }
  return count;
}

function fromBinary(b) {
  let t = 0;
  for (let i = 0; i < b.length; i++) {
    t *= 2;
    if (b[i] === "1") {
      t++;
    }
  }
  return t;
}
