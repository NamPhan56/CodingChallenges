/**
 * 
    Problem statement
    Given an alphanumeric string made up of digits and lower case Latin characters only, find the sum of all the digit characters in the string.

    Input
    The first line of the input contains an integer T denoting the number of test cases. Then T test cases follow.
    Each test case is described with a single line containing a string S, the alphanumeric string.
    Output
    For each test case, output a single line containing the sum of all the digit characters in that string.
    Constraints
    1 ≤ T ≤ 1000
    1 ≤ |S| ≤ 1000, where |S| is the length of the string S.
 * 
 */
const fs = require('fs');

function addNumbersOnly(str){

    let result = 0;
    list = str.split('');

    for(let i=0; i<list.length;i++){
        if(!isNaN(list[i])){
            //console.log('this is a number: ' + list[i]);
            result+= parseInt(list[i]);
        } 
    }
    return result;
}

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
  
    //console.log(data.toString());
    let list = data.toString().split('\r\n');
    let T = parseInt(list[0].replace('\r\n1', ''));
    // let T = 1;
    // let input = ['ab1231da'];

    //read each line of sets of 3 numbers inputs here
    for(let i=1; i<=T; i++){
        console.log(addNumbersOnly(list[i]));;
    }
})



