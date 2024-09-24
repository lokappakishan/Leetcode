/*

0128-Longest-Consecutive-Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// bruteforce version

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    // Sort the array
    let sortedNums = nums.sort((a, b) => a - b);

    let max = 1;
    let count = 1;

    for (let i = 1; i < sortedNums.length; i++) {
        // Skip duplicates
        if (sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        
        // Check if the current number is consecutive
        if (sortedNums[i] === sortedNums[i - 1] + 1) {
            count++;
        } else {
            // Reset the count if the sequence is broken
            count = 1;
        }

        // Update the maximum length of the consecutive sequence
        if (count > max) {
            max = count;
        }
    }

    return max;
};

// Optimized version
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    let maxStreak = 0;

    for (let num of numSet) {
        // Only consider 'num' if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }

    return maxStreak;
};

console.log(longestConsecutive([1,0,1,2,3]));  // Output: 4
