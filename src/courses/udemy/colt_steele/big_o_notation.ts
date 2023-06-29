/**
 * constant f(n) = 1
 * linear f(n) = n
 * quadratic f(n) = n2
 *
 *
 * space complexity
 * most primitives (booleans, numbers, undefinied, null) are constant space
 * string require O(n) space (where n is the string length)
 * reference types are generally O(n), where n is the length
 * (for arrays) or the number of keys (for objects)
 */

// O(1)
function addUpTo2(n) {
    // 3 operations regardless of n
    return n * (n+1)/ 2;
}

// O(n)
function addUpTo(n) {
    // 1 assignment
    // 1 space
    let total = 0;
    // 1 assignment, n comparisons, n additions/assignments
    // 1 space
    for (let i = 1; i <= n ; i++) {
        // n additions
        // n assignments
        total+=1;
    }
    // 5n + 2
}

// O(n2)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

export function bigONotation(): void {
    let t1 = performance.now();
    addUpTo(100000000);
    let t2 = performance.now();
    console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)

    t1 = performance.now();
    addUpTo2(10000000);
    t2 = performance.now();
    console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)
}