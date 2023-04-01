//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.

export function twoSum(nums: number[], target: number): number[] {
    let mainNumberCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = mainNumberCounter; j < nums.length; j++) {
            if(nums[mainNumberCounter]+nums[j] === target) {
                return [mainNumberCounter, j];
            }
        }
        mainNumberCounter++;
    }
    return []
}
