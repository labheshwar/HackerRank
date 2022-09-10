function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1;
    }
    const halfIndex = s.length/2;
    let first = s.slice(0, halfIndex)
    let second = s.slice(halfIndex)
    let needsToChange = 0;
    
    for (let i=0;i<first.length;i++) {
        if (!second.includes(first[i])) {
            needsToChange++;
        } else {
            second = second.replace(first[i], "");
        }
    }

    return needsToChange;
}

console.log(anagram('fdhlvosfpafhalll'));