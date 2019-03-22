module.exports = function solveSudoku(matrix) {
  const rec = (x, y) => {
    if (y == 9) {
      return matrix;
    } else if (matrix[x][y] == false) {
      const correct = valid(x, y).some(i => {
        matrix[x][y] = i;
        return rec((x + 1) % 9, y + (x == 9 ? 1 : 0));
      });
      if (correct) return matrix;
      matrix[x][y] = 0;
    } else {
      return rec((x + 1) % 9, y + (x == 8 ? 1 : 0));
    }
  };
  function valid(x, y) {
    var values = [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        values.push(matrix[x][i * 3 + j]);
        values.push(matrix[i * 3 + j][y]);
        values.push(
          matrix[3 * Math.floor(x / 3) + i][3 * Math.floor(y / 3) + j]
        );
      }
    }
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(e => values.indexOf(e) == -1);
  }
  return rec(0, 0);
};
