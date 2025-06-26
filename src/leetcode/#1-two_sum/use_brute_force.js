/**
 * Giải bài toán Two Sum bằng phương pháp vét cạn (Brute Force).
 * Độ phức tạp thời gian: O(n^2)
 * Độ phức tạp không gian: O(1)
 */
function twoSumBruteForce(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // Nếu không tìm thấy cặp nào (theo yêu cầu bài toán LeetCode, luôn có 1 cặp)
    return [];
}

// Ví dụ:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Input: nums = [${nums1}], target = ${target1}`);
console.log(`Result (Brute Force): ${twoSumBruteForce(nums1, target1)}`); // Output: [0, 1] (vì 2 + 7 = 9)

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`\nInput: nums = [${nums2}], target = ${target2}`);
console.log(`Result (Brute Force): ${twoSumBruteForce(nums2, target2)}`); // Output: [1, 2] (vì 2 + 4 = 6)
