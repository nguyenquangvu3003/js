const nums = [1, 3, 2, 3, 4, 1, 3];

function findMostFrequentFor(arr) {
  const count = {};
  let maxValue = arr[0];
  let maxCount = 0;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      maxValue = num;
    }
  }

  return { value: maxValue, count: maxCount };
}

console.log(findMostFrequentFor(nums));