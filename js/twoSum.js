const nums = [2, 7, 11, 12];
const target = 9;
for (let i = 0; i < nums.length; i++) {
  for (let u = 0; u < nums.length; u++) {
    if (nums[i] + nums[u] === target) {
      console.log([i], [u]);
    }
  }
}

const number = [3, 2, 4];
const kq = 6;
for (let q = 0; q < number.length; q++) {
  for (let w = 0; w < number.length; w++) {
    if (number[q] + number[w] === kq) {
      console.log([q], [w]);
    }
  }
}

const so = [3, 3];
const bang = 6;

for (let e = 0; e < so.length; e++) {
  for (let r = 0; r < so.length; r++) {
    if ( e !== r && so[e] + so[r] === bang) {
      console.log([e, r]);
    }
  }
}
