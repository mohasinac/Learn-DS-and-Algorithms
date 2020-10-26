function fibonacci(n){
    result = 0;
    if(n==0 || n==1 ){
        result =  n;
    }
    else{
        result =  fibonacci(n-1) + fibonacci(n-2);
    }
    return result;
}

function printFibonnaci(n){
    n0 = 0;
    n1 = 1;
    result = [n0,n1]
    for(i=2;i<=n;i++){
        result.push(result[i-1]+result[i-2])
    }
    console.log(result);
}

console.log(fibonacci(10))
console.log(printFibonnaci(10))