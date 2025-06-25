function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k);        // Output: 2
console.log(nums);     // Output: [1, 2, _]
