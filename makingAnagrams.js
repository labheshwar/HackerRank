function makingAnagrams(s1, s2) {
  let obj = {};

  for (let i = 0; i < s1.length; i++) {
    if (!obj[s1[i]]) {
      obj[s1[i]] = 1;
    } else {
      obj[s1[i]] += 1;
    }
  }

  let deletionsInS1 = 0;
  let deletionsInS2 = 0;

  for (let i = 0; i < s2.length; i++) {
    if (obj[s2[i]]) {
      deletionsInS1 += 1;
      obj[s2[i]] -= 1;
    } else {
      deletionsInS2 += 1;
    }
  }
  const deletions = deletionsInS2 + (s1.length - deletionsInS1);

  return deletions;
}

console.log(
  makingAnagrams(
    'absdjkvuahdakejfnfauhdsaavasdlkj',
    'djfladfhiawasdkjvalskufhafablsdkashlahdfa'
  )
);
