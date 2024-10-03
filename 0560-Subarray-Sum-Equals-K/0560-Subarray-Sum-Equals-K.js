/*

0560-Subarray-Sum-Equals-K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


//Bruteforce method

var subarraySum1 = function(nums, k) {

    let subCount = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum = sum + nums[j];
            if(sum == k){
                subCount++;
            }
        }
    }

    return subCount;
};

var subarraySum = function(nums, k) {

    let prefixSumMap = {};
    let prefixSum  = 0;
    let subarrayCount = 0;
    prefixSumMap[0] = 1;

    for(let i=0; i<nums.length; i++){
        prefixSum = prefixSum + nums[i];
        if(prefixSumMap[(prefixSum-k)]){
            subarrayCount += prefixSumMap[prefixSum-k];
        }

        prefixSumMap[prefixSum] = (prefixSumMap[prefixSum] || 0) + 1;
    }
    
    return subarrayCount;
}

console.log(subarraySum([1,2,3,-2,5],3));

