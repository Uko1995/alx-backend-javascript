export default function getStudentIdsSum(arr) {
  const sums = arr.reduce((acc, a) => acc + a.id, 0);
  return sums;
}
