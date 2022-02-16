export const getArcParams = (c: Array<number>, r: Array<number>, a: Array<number>, psi: number) => {
  const cos = Math.cos;
  const sin = Math.sin;
  const pi = Math.PI;

  const f_matrix_times = (matrix: Array<Array<number>>, t: Array<number>) => {
    const a: number = matrix[0][0];
    const b: number = matrix[0][1];
    const c: number = matrix[1][0];
    const d: number = matrix[1][1];
    const x: number = t[0];
    const y: number = t[1];
    return [a * x + b * y, c * x + d * y];
  };
  const f_rotate_matrix = ((x: number) => [[cos(x),-sin(x)], [sin(x), cos(x)]]);
  const f_vec_add = ((a: Array<number>, b: Array<number>) => [a[0] + b[0], a[1] + b[1]]);

  const delta = a[1] % (2*pi);
  const rotMatrix = f_rotate_matrix(psi);
  const [sX, sY] = f_vec_add (f_matrix_times(rotMatrix, [r[0] * cos(a[0]), r[1] * sin(a[0])]), c);
  const [eX, eY] = f_vec_add(f_matrix_times(rotMatrix, [r[0] * cos(a[0]+delta), r[1] * sin(a[0]+delta)] ), c);
  const fA = (delta > pi) ? 1 : 0;
  const fS = (delta > 0) ? 1 : 0;
  return "M " + sX + " " + sY + " A " + [r[0], r[1], psi / (2*pi) * 360, fA, fS, eX, eY].join(" ");
};