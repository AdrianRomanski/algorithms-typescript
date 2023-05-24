//Given an object, return a valid JSON string of that object.
// You may assume the object only inludes strings, integers, arrays, objects, booleans, and null.
// The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().
//
// Please solve it without using the built-in JSON.stringify method.


//Example 1:
//
// Input: object = {"y":1,"x":2}
// Output: {"y":1,"x":2}
// Explanation:
// Return the JSON representation.
// Note that the order of keys should be the same as the order returned by Object.keys().

//Example 2:
//
// Input: object = {"a":"str","b":-12,"c":true,"d":null}
// Output: {"a":"str","b":-12,"c":true,"d":null}
// Explanation:
// The primitives of JSON are strings, numbers, booleans, and null.
// Example 3:
//
// Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
// Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
// Explanation:
// Objects and arrays can include other objects and arrays.
// Example 4:
//
// Input: object = true
// Output: true
// Explanation:
// Primitive types are valid inputs.


export function jsonStringifyPrototype(object: any): string {
    if(typeof object === 'boolean' || typeof object === 'number') {
        return object + '';
    }
    if(typeof  object === 'string') {
        return '"' + object + '"';
    }
    function createCurrentValue(keyOrArrayMember: string, isLast: boolean, isArray: boolean): string {
        if(isArray) {
            let delimiter: string = isLast ? '' : ',';
            if(keyOrArrayMember === null) {
                return null + delimiter;
            }
            if(typeof keyOrArrayMember === 'object') {
                if(Object.keys(keyOrArrayMember).length != 0) {


                    keyOrArrayMember = jsonStringifyPrototype(keyOrArrayMember);
                } else {
                    keyOrArrayMember = '{}';
                }
            }
            return typeof keyOrArrayMember === 'string' && keyOrArrayMember !== '{}' && keyOrArrayMember[0] != '{' &&  keyOrArrayMember[0] != '['? '"' + keyOrArrayMember + '"' : keyOrArrayMember + delimiter;
        } else {
            let delimiter: string = isLast ? '' : ',';
            let value = object[keyOrArrayMember];
            if(value!= null && typeof value === 'object') {
                if(Object.keys(value).length != 0) {
                    value = jsonStringifyPrototype(value);
                } else {
                    return "{}"
                }
            }
            if(value!= null && typeof value === "string") {
                if(! (value[0] === '[' || value[0] === '{')) {
                    value = '"' + value + '"';
                }
            }
            return '"' + keyOrArrayMember + '"' + ":" + value + delimiter;
        }

    }
    if(!(object instanceof Array)) {
        if(object === null) {
            return null;
        }
        let initialValue ='{'
        const keys = Object.keys(object);
        console.log('not array?' +
            '')
        return keys.reduce((accumulator: string, key: string, index) => {
            console.log('key', key);
            return accumulator + createCurrentValue(key, index+1 === keys.length, false)
        }, initialValue) + "}";
    } else {
        if(object.length === 0) {
            return '[]';
        } else {
            return object?.reduce((accumulator: any, value: any, index) => {
                if(value.length === 0) {
                    value = '[]'
                }
                let s = createCurrentValue(value, index+1 === object.length, true);
                return accumulator + s
            }, '[') + ']';
        }
    }
};

function jsonStringify(obj: any) {
    function mapObjectKey(key: string) {
        return `"${key}":${jsonStringify(obj[key])}`;
    }
    function joinObjectKeys(elements: string[]) {
        return '{' + elements.join(',') + '}';
    }
    function joinArrayEntries(elements) {
        return '[' + elements.join(',') + ']';
    }
    if (obj === null) {
        return 'null';
    }
    if (Array.isArray(obj)) {
        const elements = obj.map(jsonStringify);
        return joinArrayEntries(elements);
    }

    if (typeof obj === 'object') {
        const keys: string[] = Object.keys(obj);
        const elements: string[] = keys.map(key => mapObjectKey(key));
        return joinObjectKeys(elements);
    }
    if (typeof obj === 'string') {
        return `"${obj}"`;
    }
    return obj.toString();
}

