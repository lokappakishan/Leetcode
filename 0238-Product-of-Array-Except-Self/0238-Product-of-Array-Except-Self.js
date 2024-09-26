/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30

*/

/*

BRUTEFORCE

*/

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = [];
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            if (j !== i) {
                product *= nums[j];
            }
        }
        answer.push(product);
    }
    return answer;
}

/*

OPTIMIZED APPROACH

*/

var productExceptSelf = function(nums) {
    let answer = [];

    // Initialize the first element of answer to 1, since there are no elements to the left of it
    answer[0] = 1;

    // First pass: calculate the left-side products
    let leftside = 1;
    for (let i = 1; i < nums.length; i++) {
        leftside = leftside * nums[i - 1];
        answer[i] = leftside;
    }

    // Second pass: calculate the right-side products and update the answer array
    let rightside = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightside;
        rightside = rightside * nums[i];
    }

    return answer;
};
