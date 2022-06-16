/**
1) Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example1:
Input:nums1 = [1,3], nums2 = [2]
Output:2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example2:
Input:nums1 = [1,2], nums2 = [3,4]
Output:2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/

/**
 *  this solution checks out on leetcode:
 * 
 * runs in O(log(n+m))
 * 
 * test input: 
 *  1 2 3 4
 *  4 5 6 7
 * 
 * median: (4+4)/2 = 
 */
 const fs = require('fs');

 fs.readFile('input.txt', (err, data) => {
     if (err) throw err;
   
     //setup here
     //console.log(data.toString());
     let input = data.toString().split('\r\n');
 
     let list1 = input[0].toString().split(' ');
     let list2 = input[1].toString().split(' ');
 
     let listNum1 = [];
     let listNum2 = [];
 
     //converting from strings to double
     for(let i of list1){
         listNum1.push(parseInt(i));
     }
 
     for(let i of list2){
         listNum2.push(parseInt(i));
     }
     //run algorithm here
     console.log(findMedian(listNum1, listNum2));
 
 })
 
 
 // looking for O(log(n+m)) complexity
 function findMedian(nums1, nums2){
 
    let n = nums1.length;
    let m = nums2.length;
    
    let leftStartIndex = 0;
    let leftEndIndex = 0;
    
    let rightStartIndex = 0;
    let rightEndIndex = 0;
    
    let median = 0;

    //base cases

    //if nums1 median ==  nums 2 median

    //if nums1 median > nums2 median
    //median is in 1st half of nums1
    //and or median is in 2nd half of nums2


    //if nums1 median < nums2 median
    //median is in 2nd half of nums1
    //and or median is in 1st half of nums2
 
 }
 
 