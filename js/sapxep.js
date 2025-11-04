const nums = [2, 4, 5, 1, 6, 3, 7];
const sortArray = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
    for (let u = 0; u < nums.length - 1 - i; u++) {
        if (nums[u] > nums[u + 1] ) {
            let tem = nums[u];
            nums[u] = nums[u + 1];
            nums[u + 1] = tem;
        }
         if (nums[u] < nums[u + 1] ) {
            let tem = nums[u];
            nums[u] = nums[u + 1];
            nums[u + 1] = tem;
        }
        
    }
        
    
        
    }
    return nums;
}
console.log(sortArray(nums));


const sortt = [...nums].sort((a,b) => a - b )
console.log(sortt);
