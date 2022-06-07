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
 function addAllNumbers(str){

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

var T = parseInt(readline());
var input = [];
// let T = 1;
// let input = ['ab1231da'];

//adds inputs to a list
for(let i=0; i<T;i++){
    input.push(readline());
}

//goes through list and apply logic
for(let print of input){
    console.log(addAllNumbers(print));
}

