/**
 * GCD - Greatest Common Divisor
 *
 * gcd(a, b) = d
 * Time Complexity: O(log min(a, b))
 * @param {int} a
 * @param {int} b
 */
function gcd(a, b) {
  if (a === 0) {
    return b;
  }

  return gcd(b % a, a);
}

// ----------------
// --- Examples ---
// ----------------
let a = 10;
let b = 15;
console.log("GCD(%d, %d) = %d", a, b, gcd(a, b));
a = 35;
b = 10;
console.log("GCD(%d, %d) = %d", a, b, gcd(a, b));
a = 31;
b = 2;
console.log("GCD(%d, %d) = %d", a, b, gcd(a, b));
a = 80;
b = 48;
console.log("GCD(%d, %d) = %d", a, b, gcd(a, b));
a = 144;
b = 89;
console.log("GCD(%d, %d) = %d", a, b, gcd(a, b));
