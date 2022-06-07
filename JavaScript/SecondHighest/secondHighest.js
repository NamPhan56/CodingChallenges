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
function secondHighest(str){

    list = str.split(' ');
    
    //sort here
    list.sort();

    return list[list.length-2];

}

//var N = parseInt(readline());
var N = 1;
var input = ['5 3 6', '8 9 20'];
for(let i=0; i<N;i++){
    //input.push(readline());
}


//code here

//

for(let print of input){
    console.log(secondHighest(print));
}

