/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Two-pointer technique without creating a new string
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        // Move i to the next alphanumeric character
        while (i < j && !isAlphanumeric(s[i])) {
            i++;
        }
        // Move j to the previous alphanumeric character
        while (i < j && !isAlphanumeric(s[j])) {
            j--;
        }

        // Compare characters in a case-insensitive way
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);  // a-z
}
