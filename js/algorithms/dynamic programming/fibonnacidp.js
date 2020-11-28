/*
    Fibonacci Series

    f(n) = {  n if n ==1 or 0
            {  f(n-1)+f(n-2) for n >=2


    idea : 1. save the calculated solutions to sub problems i.e. overlapping sub-problems  and then reuse them  
    
    Memoization (Top-down):
    1. array where store fibonnaci of i
    Tabulation (Bottom up):
    1. 
*/

let fibs = [0,1]
/*
    Top down we make the things at then divide them to smaller and smaller and solve them
*/
function fibonnacidpRtopdw(n){
    //console.log(n,fibs);
    if(fibs[n] == null || fibs[n] == undefined){
        fibs[n] = fibonnacidpRtopdw(n-1)+ fibonnacidpRtopdw(n-2)
    }
    return fibs[n];
 }

 let fibs2 = [0,1];
 /*
    Bottom up approach , we build slowly from small to higher
 */
 function fibonnacidpbtmup(n){
    for(i=2;i<=n;i++){
        fibs2[i]= fibs2[i-1]+fibs2[i-2];
    }
    return fibs2[n];
 }

 module.exports = {
    fibonnacidpRtopdw,
    fibonnacidpbtmup
 }

 console.log(fibonnacidpRtopdw(6))
 console.log(fibonnacidpbtmup(6))