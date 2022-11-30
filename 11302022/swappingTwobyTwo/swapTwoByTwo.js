/**
Coding Challenge: Swapping Two by Two

Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.

Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"
ABCD EFGH
swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"

swapTwo("munchkins") ➞ "ncmuinhks"

swapTwo("FFGGHHI") ➞ "GGFFHHI"
 
Notes
Keep leftover strings in the same order.
 */
    const fs = require('fs');

    function swapTwo(str){
    
        let firstTwo = "";
        let secondTwo = "";
        let newStr = "";
        let swapStrIndexEnd = str.length - (str.length % 4)-1;

        for(let i=0; i<swapStrIndexEnd; i+=4){
            firstTwo = str.substring(i, i+2);
            secondTwo = str.substring(i+2, i+4);

            newStr += secondTwo+firstTwo;
            //console.log(firstTwo);
            //console.log(secondTwo);
        }

        //append nonswapped
        if(swapStrIndexEnd != str.length-1){
            newStr+= str.substring(swapStrIndexEnd);
        }
        return newStr;
    }
    
    fs.readFile('input.txt', (err, data) => {
        if (err) throw err;
      
        //console.log(data.toString());
        let list = data.toString().split('\r\n');

        console.log(swapTwo(list[0]));
    })
    
    
    