/*
    SELECTION SORT
    works by assuming that the left side of the array is sorted 
    and searches for the min element in the remaining array and puts it on the left side
    this way at each iteration the ith smallest element is added to the sorted array and the remaining 
    may be unsorted
    
    advantage 
    swaps are only only once
8*/
export function selectionSort(inputArr){
    j = 0;
    n = inputArr.length;
    for(j=0; j < n ; j++){
        iMin = j;
        for(i = j +1 ; i < n ; i++){
            if(inputArr[i] < inputArr[iMin]){
                iMin = i;
            }
        }
        if(iMin !== j){
            temp = inputArr[j];
            inputArr[j] = inputArr[iMin];
            inputArr[iMin] = temp;
        }
        console.log(inputArr);
    }
    return inputArr;
}
module.exports = {
    selectionSort
}