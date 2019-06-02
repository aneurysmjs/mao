
import isFunction from '/utils/isFunction';

export default function makeGrid(
  m: number,
  n: number,
  initial: () => number | number
): Array<Array<number>> {
  let a = null;
  let matrix = [];
  for (let i = 0; i < m; i += 1) {
    a = [];
    for (let j = 0; j < n; j += 1) {
      a[j] = isFunction(initial) ? initial() : initial;
    }
    matrix[i] = a;
  }
  return matrix;
}
