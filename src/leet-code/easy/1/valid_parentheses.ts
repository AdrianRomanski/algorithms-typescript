//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
    const parentheses = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const stack: string[] = [];
    for (const char of s) {
        switch (char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;

            case ')':
            case '}':
            case ']':
                if (stack.pop() !== parentheses[char]) {
                    return false;
                }
        }
    }
    return !stack.length;
}