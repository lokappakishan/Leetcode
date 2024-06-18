/*

Longest-Sub-Array-with-Sum-K
Geeks for Geeks
Striver list : 
Section Array's Easy

Given an array containing N integers and an integer K., Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.
 
Example 1:
 
Input :
A[] = {10, 5, 2, 7, 1, 9}
K = 15
Output : 4
Explanation:
The sub-array is {5, 2, 7, 1}.
Example 2:
Input : 
A[] = {-1, 2, 3}
K = 6
Output : 0
Explanation: 
There is no such sub-array with sum 6.
Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function lenOfLongSubarr() that takes an array (A), sizeOfArray (n),  sum (K)and returns the required length of the longest Sub-Array. The driver code takes care of the printing.
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
 
Constraints:
1<=N<=105
-105<=A[i], K<=105


*/

class Solution {
    lenOfLongSubarr(arr, n, k) {
        let prefixSumMap = new Map();
        let maxLength = 0;
        let currentPrefixSum = 0; // Initialize currentPrefixSum to 0

        for (let i = 0; i < n; i++) {
            currentPrefixSum += arr[i];

            if (currentPrefixSum === k) {
                maxLength = i + 1;
            }

            let checkPrefixSum = currentPrefixSum - k;

            if (prefixSumMap.has(checkPrefixSum)) {
                maxLength = Math.max(maxLength, i - prefixSumMap.get(checkPrefixSum));
            }

            if (!prefixSumMap.has(currentPrefixSum)) { 
                prefixSumMap.set(currentPrefixSum, i);
            }
        }

        return maxLength;
    }
}
