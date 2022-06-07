/**Problem Statement
 * Write a program that accepts sets of three numbers, and prints the second-maximum number among the three.
 * 
 * Input
 * First line contains the number of triples, N.
 * The next N lines which follow each have three space separated integers.
 * 
 * Output
 * For each of the N triples, output one new line which contains the second-maximum integer among the three.
 * 
 * Constraints
 * 1 ≤ N ≤ 6
 * 1 ≤ every integer ≤ 10000
 * The three integers in a single triplet are all distinct. That is, no two of them are equal.
 * 
 */

const fs = require('fs');
const readline = require('readline');


function secondHighest(str){

    let list = str.split(' ');
    let list2=[];

    for(let numstr in list){
        list2.push(parseInt(numstr));
    }
    //sort here
    list2 = list2.sort();

    return list[list.length-2];
}

// // var N = 1;
// // var input = ['5 3 6', '8 9 20'];

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
  
    //console.log(data.toString());
    let list = data.toString().split('\r\n');
    let N = parseInt(list[0].replace('\r\n1', ''));

    //read each line of sets of 3 numbers inputs here
    for(let i=1; i<=N; i++){
        console.log(secondHighest(list[i]));;
    }
})





