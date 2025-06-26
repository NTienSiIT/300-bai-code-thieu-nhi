def map_1d_to_2d(index_1d, num_cols):
    """
    Chuyển đổi chỉ số 1D sang chỉ số 2D (hàng, cột).
    """
    row_idx = index_1d // num_cols # Phép chia nguyên để lấy hàng
    col_idx = index_1d % num_cols  # Phép chia dư để lấy cột
    return row_idx, col_idx

# Ví dụ (tiếp nối ví dụ trước, giả sử flat_mat = [1, 2, 3, 4, 5, 6])
n = 3 # Số cột của ma trận gốc
flat_mat_elements = [1, 2, 3, 4, 5, 6] # Giả định đây là các phần tử sau khi làm phẳng

print(f"\nNumber of columns (original): {n}")

# Lấy phần tử thứ 1 (index 0)
# (0 // 3, 0 % 3) = (0, 0)
print(f"Mapping 1D index 0 to 2D: {map_1d_to_2d(0, n)}") # Output: (0, 0)

# Lấy phần tử thứ 2 (index 1)
# (1 // 3, 1 % 3) = (0, 1)
print(f"Mapping 1D index 1 to 2D: {map_1d_to_2d(1, n)}") # Output: (0, 1)

# Lấy phần tử thứ 4 (index 3)
# (3 // 3, 3 % 3) = (1, 0)
print(f"Mapping 1D index 3 to 2D: {map_1d_to_2d(3, n)}") # Output: (1, 0)
