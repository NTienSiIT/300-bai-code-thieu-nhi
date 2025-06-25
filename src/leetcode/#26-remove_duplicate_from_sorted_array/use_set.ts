function removeDuplicates(nums: number[]): number {
    const unique = Array.from(new Set(nums));
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }
    return unique.length;
}

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k);        // Output: 2
console.log(nums);     // Output: [1, 2, _]
