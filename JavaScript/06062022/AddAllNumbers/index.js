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
 function addAllNumbers(str){

    let result = 0;
    list = str.split('');

    
    for(let i=0; i<list.length;i++){
        if(!isNaN(list[i])){
            console.log('this is a number: ' + list[i]);
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

