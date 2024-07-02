export default function cleanSet(set, startString) {
  if (!(set instanceof Set && typeof startString === 'string' && startString !== '')) {
    return '';
  }

  const arr = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      arr.push(item.slice(startString.length));
    }
  }
  return arr.join('-');
}
