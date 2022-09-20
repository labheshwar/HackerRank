function separateNumbers(s) {
  if (s.length < 2) {
    console.log('NO');
    return;
  }

  for (var i = 1; i <= Math.floor(s.length / 2); i++) {
    let first = s.slice(0, i);
    let finalStr = '';

    for (var j = 0; j <= s.length; j++) {
      finalStr = finalStr + (BigInt(first) + BigInt(j));
      if (finalStr.length >= s.length) {
        break;
      }
    }

    let finalTest = finalStr === s;

    if (finalTest) {
      console.log('YES' + ' ' + first);
      return;
    }
  }
  console.log('NO');
}

separateNumbers('91011');
