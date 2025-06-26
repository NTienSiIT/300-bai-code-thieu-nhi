def flatten_matrix(mat):
    """
    Minh họa cách "phẳng hóa" một ma trận 2D thành một danh sách 1D.
    """
    flat_list = []
    for row in mat:
        for element in row:
            flat_list.append(element)
    return flat_list

# Ví dụ
mat = [[1, 2], [3, 4]]
flat_mat = flatten_matrix(mat)
print(f"Original matrix: {mat}")
print(f"Flattened matrix (1D list): {flat_mat}") # Output: [1, 2, 3, 4]
