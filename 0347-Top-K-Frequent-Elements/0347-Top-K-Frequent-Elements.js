/*

0347-Top-K-Frequent-Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map = {};
    
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] = map[nums[i]] + 1;
        }else{
            map[nums[i]] = 1;
        }
    }
    
    let sortedNums =  Object.keys(map).sort((a,b)=>map[b]-map[a]);
    return sortedNums.slice(0,k).map(Number);
};

console.log(topKFrequent([1,1,1,2,2,3,3,3,3],2));