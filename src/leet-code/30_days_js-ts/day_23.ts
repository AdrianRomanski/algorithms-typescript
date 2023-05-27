//Write code that enhances all arrays such that you can call the array.last() method on any array and
// it will return the last element. If there are no elements in the array, it should return -1.

// @ts-ignore
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

// @ts-ignore
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length-1] : -1
};