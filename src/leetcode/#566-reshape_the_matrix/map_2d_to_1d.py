def map_2d_to_1d(row_idx, col_idx, num_cols):
    """
    Chuyển đổi chỉ số 2D (hàng, cột) sang chỉ số 1D.
    """
    return num_cols * row_idx + col_idx

# Ví dụ
mat = [[1, 2, 3], [4, 5, 6]]
m = len(mat) # Số hàng
n = len(mat[0]) # Số cột

print(f"Matrix: {mat}")
print(f"Dimensions: {m}x{n}")

# Lấy phần tử (0, 1) -> giá trị 2
# Chỉ số 1D = n * 0 + 1 = 3 * 0 + 1 = 1
# arr[1]
print(f"Mapping (0, 1) to 1D index: {map_2d_to_1d(0, 1, n)}") # Output: 1

# Lấy phần tử (1, 0) -> giá trị 4
# Chỉ số 1D = n * 1 + 0 = 3 * 1 + 0 = 3
# arr[3]
print(f"Mapping (1, 0) to 1D index: {map_2d_to_1d(1, 0, n)}") # Output: 3
