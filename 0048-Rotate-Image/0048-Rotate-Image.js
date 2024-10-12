/*

0048-Rotate-Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


// BRUTEFORCE METHOD
var bruteForceRotate = function(matrix) {

    let len = matrix.length;
    let  result = new Array(len).fill(0).map(()=> new Array(len).fill(0));
    
    for(let i=0;i< len; i++ ){
        for(let j=0; j<len; j++){
            result[j][len-1-i] = matrix[i][j];
        }        
    }

    return result;
};

//OPTIMIZED METHOD
var rotate = function(matrix){

    let len = matrix.length;

    for(let i=0; i<len; i++){
        for(let j=i; j<len; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let i=0; i<len; i++){
         for (let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][len-1-j];
            matrix[i][len-1-j] = temp; 
         }
    }

    return matrix;
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));