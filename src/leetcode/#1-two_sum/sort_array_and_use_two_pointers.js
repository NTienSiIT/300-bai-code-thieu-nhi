/**
 * Giải bài toán Two Sum bằng cách sắp xếp và sử dụng Two Pointers.
 * LƯU Ý: Phương pháp này TRẢ VỀ CÁC CHỈ SỐ SAU KHI SẮP XẾP.
 * Nếu bài toán yêu cầu chỉ số gốc, cần điều chỉnh (ví dụ: lưu [giá trị, chỉ số gốc] rồi sắp xếp).
 * Độ phức tạp thời gian: O(n log n) (do sắp xếp)
 * Độ phức tạp không gian: O(n) (nếu tạo bản sao để lưu chỉ số gốc hoặc O(1) nếu không cần chỉ số gốc)
 */
function twoSumSorted(nums, target) {
    // Để giữ lại chỉ số gốc, ta tạo một mảng các cặp [giá trị, chỉ số]
    const indexedNums = nums.map((num, index) => [num, index]);

    // Sắp xếp mảng dựa trên giá trị
    indexedNums.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = indexedNums.length - 1;

    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];

        if (sum === target) {
            // Trả về chỉ số gốc
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

// Ví dụ:
const nums3 = [2, 7, 11, 15];
const target3 = 9;
console.log(`\nInput: nums = [${nums3}], target = ${target3}`);
console.log(`Result (Sorted + Two Pointers): ${twoSumSorted(nums3, target3)}`); // Output: [0, 1]

const nums4 = [3, 2, 4]; // Test trường hợp chỉ số không theo thứ tự
const target4 = 6;
console.log(`\nInput: nums = [${nums4}], target = ${target4}`);
console.log(`Result (Sorted + Two Pointers): ${twoSumSorted(nums4, target4)}`); // Output: [1, 2] (vì 2 ở index 1, 4 ở index 2)