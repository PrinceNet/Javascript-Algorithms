/**
 * Binary Search
 *
 * Time Complexity: O(log n) where n = |items|
 * We assume that items is sorted from greatest to smallest.
 * @param {int} n
 */
function binarySearch(items, find) {
  let l = 0;
  let r = items.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    console.error(`left: ${l}, right: ${r}, mid: ${m}`);

    if (items[m] < find) {
      l = m + 1;
    } else if (items[m] > find) {
      r = m - 1;
    } else {
      return m; // element is present
    }
  }

  return false; // element is not present
}

// ----------------
// --- Examples ---
// ----------------
let items = [5, 13, 22, 64, 157, 289, 333, 987, 1010];
let find = 1;
console.log('binarySearch([%s], %d) = %s', items.join(', '), find, binarySearch(items, find));

items = [5, 13, 22, 64, 157, 289, 333, 987, 1010];
find = 157;
console.log('binarySearch([%s], %d) = %s', items.join(', '), find, binarySearch(items, find));

items = [5, 13, 22, 64, 157, 289, 333, 987, 1010];
find = 5;
console.log('binarySearch([%s], %d) = %s', items.join(', '), find, binarySearch(items, find));
