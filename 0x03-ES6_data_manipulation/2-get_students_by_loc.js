export default function getStudentsByLocation(arr, city) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const users = arr.filter((a) => a.location === city);
  return users;
}
