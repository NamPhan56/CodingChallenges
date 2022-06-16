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
 * case 1: if median1 = median2
 * 
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


//bruteforce
function findMedian(nums1, nums2){

    let n = nums1.length;
    let m = nums2.length;
    let median = 0;

    //base cases
    if(nums1.length==0){ //O(1)
        if(nums2.length%2==0){ //even number of elements
            let index=Math.floor(nums2.length/2)
            median = nums2[index] + nums2[index+1]/2;
            return (median);
        }
        else{
            return nums2[(nums2.length-1)/2];
        }
    }
    else if(nums2.length==0){ //O(1)
        if(nums1.length%2==0){ //even number of elements
            let index=Math.floor(nums1.length/2)-1;
            median = nums1[index] + nums1[index+1]/2;
            return (median);
        }
        else{
            return nums1[(nums1.length-1)/2];
        }
    }

    else{ //if at least m or n are not 0;

        let list1,list2; //list1's length should always be greater than or equal to list2's length
        //setup step
        if(n>m){
            list1 = nums1;
            list2 = nums2;
        }
        else if (n<m){
            list1 = nums2;
            list2 = nums1;
        }
        else{ //equal
            list1 = nums1;
            list2 = nums2;
        }

        listMerged = [];
        //merge step
        let l1=0;
        let l2=0;

        while (l1 < list1.length && l2 < list2.length) {
            if (list1[l1] <= list2[l2]) {
                listMerged.push(list1[l1]);
                l1++;
            }
            else {
                listMerged.push(list2[l2]);
                l2++;
            }
        }

        while (l1 < list1.length) {
            listMerged.push(list1[l1]);
            l1++;
        }

        while (l2 < list2.length) {
            listMerged.push(list2[l2]);
            l2++;
        }

        //console.log(listMerged);

        //calculate median
        let half = Math.floor(listMerged.length/2);
        if((listMerged.length %2) == 1){
            return listMerged[half];
        }
        else{
            return ((listMerged[half] + listMerged[half-1])/2);
        }
    }

}

