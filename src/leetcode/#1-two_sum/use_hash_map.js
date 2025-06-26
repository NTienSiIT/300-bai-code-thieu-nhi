/**
 * Giải bài toán Two Sum bằng Hash Map (Object/Map).
 * Độ phức tạp thời gian: O(n)
 * Độ phức tạp không gian: O(n)
 */
function twoSumHashMap(nums, target) {
    const numMap = new Map(); // Dùng Map để lưu {giá trị: chỉ_số}

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Kiểm tra xem số bù có trong map không
        if (numMap.has(complement)) {
            // Nếu có, trả về chỉ số của số bù và chỉ số hiện tại
            return [numMap.get(complement), i];
        }

        // Nếu không, thêm số hiện tại vào map để sử dụng cho các lần duyệt sau
        numMap.set(currentNum, i);
    }
    // Không tìm thấy cặp nào (theo yêu cầu bài toán LeetCode, luôn có 1 cặp)
    return [];
}

// Ví dụ:
const nums5 = [2, 7, 11, 15];
const target5 = 9;
console.log(`\nInput: nums = [${nums5}], target = ${target5}`);
console.log(`Result (Hash Map): ${twoSumHashMap(nums5, target5)}`); // Output: [0, 1]

const nums6 = [3, 2, 4];
const target6 = 6;
console.log(`\nInput: nums = [${nums6}], target = ${target6}`);
console.log(`Result (Hash Map): ${twoSumHashMap(nums6, target6)}`); // Output: [1, 2]

const nums7 = [3, 3];
const target7 = 6;
console.log(`\nInput: nums = [${nums7}], target = ${target7}`);
console.log(`Result (Hash Map): ${twoSumHashMap(nums7, target7)}`); // Output: [0, 1]