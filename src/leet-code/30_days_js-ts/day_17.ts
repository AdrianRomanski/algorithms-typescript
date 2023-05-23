//Given two objects o1 and o2, check if they are deeply equal.
//
// For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.
//
// You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.
//
// Please solve it without using lodash's _.isEqual() function.

export function areDeeplyEqual(o1: any, o2: any): boolean {
    function isArray(obj: any){
        return obj instanceof Array
    }
    if (isArray(o1) !== isArray(o2)) {
        return false;
    }

    function isObject(obj: any) {
        return typeof obj === 'object';
    }
    if(!isObject(o1) || !isObject(o2)) {
        return o1 === o2;
    }

    if(o1 === null || o2 === null) {
        return o1 === o2;
    }

    const firstObjectKeys: string[] = Object.keys(o1);
    if(firstObjectKeys.length !=  Object.keys(o2).length) {
        return false;
    }

    function isEveryKeyPresentInBothObject() {
        return firstObjectKeys.every((key: string) => o2.hasOwnProperty(key));
    }
    if(!isEveryKeyPresentInBothObject()) {
        return false;
    }

    return firstObjectKeys.every((key: string) => areDeeplyEqual(o1[key], o2[key]));
}
