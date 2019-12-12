export default function makeGrid(m: number, n: number, initial: () => number): number[][] {
  let a = null;
  const matrix = [];
  for (let i = 0; i < m; i += 1) {
    a = [];
    for (let j = 0; j < n; j += 1) {
      a[j] = initial();
    }
    matrix[i] = a;
  }
  return matrix;
}
