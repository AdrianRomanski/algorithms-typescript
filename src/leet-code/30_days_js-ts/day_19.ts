//Write a function that converts an array of objects arr into a matrix m.
//
// arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.
//
// The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting,
// the column names are the respective paths in the object separated by ".".
//
// Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object.
// If a given object doesn't contain a value for a given column, the cell should contain an empty string "".
//
// The colums in the matrix should be in lexographically ascending order.


//We have to recurse each object to build a property name - key.
// And after that we should add value into output array (resresres).
// If resresres has the key already in res[0]res[0]res[0],
// just put the value on its place. Otherwise we have to find the posision of new key and insert empty values for objects added earlier.
// I use binary search to determine new key position.


//Example 1:
//
// Input:
// arr = [
//   {"b": 1, "a": 2},
//   {"b": 3, "a": 4}
// ]
// Output:
// [
//   ["a", "b"],
//   [2, 1],
//   [4, 3]
// ]
//
// Explanation:
// There are two unique column names in the two objects: "a" and "b".
// "a" corresponds with [2, 4].
// "b" coresponds with [1, 3].


function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
    type matrixType = string | number | boolean | null;
    const result: matrixType [][] = [[]];

    function setValue(index: number, key: string, value: matrixType) {
        let keyPosition: number = result[0].indexOf(key);
        if (keyPosition == -1) {
            function binarySearchKeyPosition(): number {
                let left: number = 0;
                let right: number = result[0].length;
                while (left < right) {
                    const mid: number = left + ((right - left) >>> 1);
                    if (result[0][mid] as string > key) {
                        right = mid
                    } else {
                        left= mid + 1
                    }
                }
                return left;
            }
            keyPosition = binarySearchKeyPosition();
            result[0].splice(keyPosition, 0, key);
            for (let i = 1; i <= index; i++)
                result[i].splice(keyPosition, 0, '');
            result[index + 1].splice(keyPosition, 0, value);
        } else {
            result[index + 1][keyPosition] = value;
        }
    }
    function parse(obj: any, index: number, name: string) {
        for (const k in obj) {
            const value = obj[k];
            const key: string = name == '' ? k : name + '.' + k
            if (value === null || typeof value !== 'object') {
                setValue(index, key, value)
            } else {
                parse(value, index, key)
            }
        }
    }
    arr.forEach((o, index) => {
        result[index + 1] = new Array(result[0].length).fill('')
        parse(o, index, '');
    })
    return result
};