/*
bubble sort

it works as a bubbles inside a shaked cola can
the larger the item the bigger its bubble 
each largest bubbles gets to be in its place the first

use only when you have to count how many times adjacent items needs to 
be swapped

else otherwise waste sort 
*/
function bubbleSort(inputArray){
    swapped = false;
    lastIndex = inputArray.length - 1;
    do {
        swapped = false;
        for(i=0;i<=lastIndex;i++){
            if(inputArray[i]>inputArray[i+1]){
                temp = inputArray[i]
                inputArray[i] = inputArray[i+1]
                inputArray[i+1] = temp
                swapped = true;
            }
        }
        lastIndex = lastIndex - 1
        console.log(inputArray)
    } while (swapped) ;
    return inputArray;
}

module.exports = {
    bubbleSort
}

