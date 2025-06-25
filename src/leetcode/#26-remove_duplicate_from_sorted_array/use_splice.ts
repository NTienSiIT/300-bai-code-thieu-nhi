function removeDuplicates(nums: number[]): number {
    for (let i = 1; i < nums.length; ) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
}

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k);        // Output: 2
console.log(nums);     // Output: [1, 2, _]
