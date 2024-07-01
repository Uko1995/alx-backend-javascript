export default function getListStudentIds(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const arrIndex = arr.map((a) => a.id);
  return arrIndex;
}
