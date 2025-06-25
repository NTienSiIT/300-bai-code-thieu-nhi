function removeDuplicates(nums: number[]): number {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k);        // Output: 2
console.log(nums);     // Output: [1, 2, _]
