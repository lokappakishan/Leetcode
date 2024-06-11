/*

0242-Valid-Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length) return false;

    let str1Map = new Map();
    let str2Map = new Map();


    for(let i=0; i< s.length; i++){
        str1Map.set(s[i],(str1Map.get(s[i]) || 0)+1);
        str2Map.set(t[i],(str2Map.get(t[i]) || 0)+1);

    }

    for(let i=0; i<s.length; i++){
        if(str1Map.get(s[i]) !== str2Map.get(s[i])){
            return false
        }
    }

    return true;
};