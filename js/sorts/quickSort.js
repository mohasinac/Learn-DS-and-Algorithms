/*
    QUCICK SORT

    so quick sort is really quick sort O(nlogn) in avg and best case 
    worst case is O(n^2)

    logic : 
    - take an array and choose a pivot , ( pivot doesnt effect the time complpexity )
    - compare the pivot with each element of the array  with 2 pointers i and j 
    - set i to be p , p was the initial pivot place
    - i is used to keep track of the pivots elements correct position by finding the elements smaller than pivot
    - j is used to iterate the array 
    - if array[j] < pivot then we swap array[i] and array[j] so that after whole traversal i will denote the correct position of pivot
    - till now we have just found the actual position of the pivot 
    - so we swap array[i] and array[p] 
    - we return i back
    - now we have this i we divide our array from p to i-1 and i+1 to r as i is the correct place for pivot
    - at each iteration our array have one element at its correct place
*/

function quickSort(inputArr , p , r){
    if(p<r){
        q = partition(inputArr , p , r);
        quickSort(inputArr,p , q-1);
        quickSort(inputArr,q+1 , r);
        console.log(inputArr)
    }
    return inputArr;
}

function partition(inputArr , p , r){
    pivot = inputArr[p];
    i = p ;
    for( j = p+1 ; j<=r; j++){
        if( inputArr[j]<= pivot ){
            i = i + 1;        
            temp = inputArr[i];
            inputArr[i] = inputArr[j];
            inputArr[j] = temp;
        }
    }
    temp = inputArr[p];
    inputArr[p] = inputArr[i];
    inputArr[i] = temp;
    console.log(pivot,i,j)
    return i; 
}
module.exports = {
    quickSort
}