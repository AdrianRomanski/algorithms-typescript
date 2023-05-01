//Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".

//Input: strs = ["flower","flow","flight"]
// Output: "fl"
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) { return ""; }
    if (strs.length === 1) { return strs[0]; }

    let prefix = strs[0];

    function prefixIsNotPresentInString(i: number) {
        return strs[i].indexOf(prefix) !== 0;
    }

    function subtractLastCharFromPrefix() {
        return prefix.substring(0, prefix.length - 1);
    }

    for (let i = 1; i < strs.length; i++) {
        while(prefixIsNotPresentInString(i)) {
            prefix = subtractLastCharFromPrefix();
            if (prefix === "") {
                return prefix;
            }
        }
    }
    return prefix;
}
