function rot13(str) {
  let strArr = str.split(' ');
  let decodedStrArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let word = '';
    for (let j = 0; j < strArr[i].length; j++) {
      if (strArr[i].charCodeAt(j) > 64 && strArr[i].charCodeAt(j) < 91) {
        let asciiForShiftedChar = strArr[i].charCodeAt(j) + 13;
        if (asciiForShiftedChar > 90) {
          let rest = asciiForShiftedChar - 90;
          asciiForShiftedChar = 64 + rest;
        }
        word += String.fromCharCode(asciiForShiftedChar);
      } else {
        word += strArr[i][j];
      }
    }
    decodedStrArr.push(word);
  }
  return decodedStrArr.join(' ');
}

rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
