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

let input;

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    //setup here
    console.log(data.toString());
    input = data.toString().split('\r\n');

})

//console.log(input);

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
//algorithm starts here
console.log(findMedian(listNum1, listNum2));
 
 
//takes two sorted lists and returns the median both merged lists.
function findMedian(listNum1, listNum2){
    
    console.log(listNum1);
    console.log(listNum2);

    let n = listNum1.length;
    let m = listNum2.length;

    let median = 0;

    //base cases
    if(listNum1.length==0){ //O(1)
        if(listNum2.length%2==0){ //even number of elements
            let index=Math.floor(listNum2.length/2)
            median = listNum2[index] + listNum2[index+1]/2;
            return (median);
        }
        else{
            return listNum2[(listNum2.length-1)/2];
        }
    }
    else if(listNum2.length==0){ //O(1)
        if(listNum1.length%2==0){ //even number of elements
            let index=Math.floor(listNum1.length/2)-1;
            median = listNum1[index] + listNum1[index+1]/2;
            return (median);
        }
        else{
            return listNum1[(listNum1.length-1)/2];
        }
    }

    else{ //if at least m or n are not 0;

        //first find the medians of both lists
        let l1medianIndex= Math.floor((listNum1.length-1)/2); //for odd number of elements
        let l2medianIndex = Math.floor((listNum2.length-1)/2); //for odd number of elements

        let list1StartIndex=0;
        let list1EndIndex=0;

        let list2StartIndex=0;
        let list2EndIndex=0;

        if(l1medianIndex > l2medianIndex){
            //median is in the left half of the list 1.
            list1StartIndex = 0;
            list1EndIndex = Math.floor((listNum1.length-1)/2);

            //median is in the right half of list1
            list2StartIndex = Math.floor((listNum2.length-1)/2);
            list2EndIndex =  listNum2.length-1;

        }
    }
}

function divide(list1, list1StartIndex, lis1EndIndex, list2, list2StartIndex, list2EndIndex){

}
 
 