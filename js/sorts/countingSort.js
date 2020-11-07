/*
    COUNTING SORT

    so we count each element in an array which we know ranges from 0 to k ( inclusive )
    so we create an array of length k+1 and set it to 0
    then we loop through input array and count number of times each element comes and put in auxillary array
    the auxillary array we create a commulative sum to know the correct position of each element

    drawbacks
    only works for integers from 0 to k
    doesnt work for decimals
*/
function countingSort(inputArr , k ){
    result = []
    auxillary = []
    
    console.log(result);
    //fill auxillary from 0 to k with 0
    for(i=0;i<=k;i++){
        auxillary.push(0);
    }
    // put count of each number inside auxillary e.g. aux[i] = count(i) in inputArr
    for(i=0;i<inputArr.length;i++){
        auxillary[inputArr[i]] += 1 ;
    }
    console.log(auxillary);
    for(i=1;i<=k;i++){
        auxillary[i] = auxillary[i]+auxillary[i-1]
    }
    console.log(auxillary)
    for(i=inputArr.length-1;i>=0;i--){
        result[auxillary[inputArr[i]]-1] = inputArr[i]; // putting each element at its correct place
        auxillary[inputArr[i]] =auxillary[inputArr[i]] - 1;
    }
    if(result.length != inputArr.length){
        throw Exception("not working ")
    }
    return result;
}

module.exports = {
    countingSort
}


