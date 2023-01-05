let y=0
let z=0

function Check (x) {
    for (let i=0;i<x.length; i++) { 
        if(x[i]%2===0) {
            y+=1 
        } 
        else{ 
            z+=1
        }
    }

    console.log("Total Even Numbers: "+y)
    console.log("Total Odd Numbers: "+z)
}

Check([1,2,3,4,5,6])