class Solution:
    def matrixReshape(self, mat: list[list[int]], r: int, c: int) -> list[list[int]]:
        original_rows = len(mat)
        original_cols = len(mat[0])

        # Kiểm tra điều kiện không thể định hình lại: số lượng phần tử không khớp
        if original_rows * original_cols != r * c:
            return mat

        # Bước 1: "Phẳng hóa" ma trận gốc thành một danh sách 1D ảo (hoặc thực tế)
        # Chúng ta không cần tạo một danh sách 1D vật lý mới để tiết kiệm bộ nhớ,
        # mà chỉ cần duyệt qua các phần tử theo thứ tự 1D.
        
        # Bước 2: Tạo ma trận mới với kích thước r x c
        reshaped_mat = [[0] * c for _ in range(r)]

        # Duyệt qua các phần tử của ma trận gốc và đặt chúng vào ma trận mới
        # Sử dụng chỉ số 1D để ánh xạ vị trí
        
        # current_1d_index sẽ đại diện cho chỉ số trong "danh sách phẳng" ảo.
        current_1d_index = 0
        for i in range(original_rows):
            for j in range(original_cols):
                # Lấy giá trị từ ma trận gốc
                value = mat[i][j]

                # Ánh xạ chỉ số 1D hiện tại vào chỉ số 2D của ma trận MỚI
                # Công thức: row_new = current_1d_index // c
                #             col_new = current_1d_index % c
                new_row = current_1d_index // c
                new_col = current_1d_index % c

                # Đặt giá trị vào ma trận mới
                reshaped_mat[new_row][new_col] = value

                # Tăng chỉ số 1D để chuyển sang phần tử tiếp theo
                current_1d_index += 1
        
        return reshaped_mat

# --- Ví dụ kiểm tra ---
sol = Solution()

# Ví dụ 1: Định hình lại thành công
mat1 = [[1, 2], [3, 4]]
r1 = 1
c1 = 4
result1 = sol.matrixReshape(mat1, r1, c1)
print(f"Matrix: {mat1}, Reshape to {r1}x{c1}")
print(f"Result 1: {result1}") # Expected: [[1, 2, 3, 4]]

# Ví dụ 2: Không thể định hình lại (số lượng phần tử không khớp)
mat2 = [[1, 2], [3, 4]]
r2 = 2
c2 = 4
result2 = sol.matrixReshape(mat2, r2, c2)
print(f"\nMatrix: {mat2}, Reshape to {r2}x{c2}")
print(f"Result 2: {result2}") # Expected: [[1, 2], [3, 4]] (original matrix)

# Ví dụ 3: Định hình lại thành công với kích thước khác
mat3 = [[1, 2, 3, 4, 5, 6]]
r3 = 2
c3 = 3
result3 = sol.matrixReshape(mat3, r3, c3)
print(f"\nMatrix: {mat3}, Reshape to {r3}x{c3}")
print(f"Result 3: {result3}") # Expected: [[1, 2, 3], [4, 5, 6]]
