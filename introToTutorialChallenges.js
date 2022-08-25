const V = 4;
const arr = [1, 4, 5, 7, 9, 12];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === V) {
    console.log(i);
    break;
  }
}
