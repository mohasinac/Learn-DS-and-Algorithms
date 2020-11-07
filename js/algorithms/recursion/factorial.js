/* 
    general factorial with trail recursion
*/

function factorial(n,ans){
    if(n == 1 ){
        return ans;
    }
    return factorial(n-1,ans*n)
}


module.exports = {
    factorial
}