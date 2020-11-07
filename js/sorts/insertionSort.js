/* Works as if we insert a new card into an already sorted set of cards
    At each iteration we keep on swapping the position of the new card with the old cards until we find the 
    correct position of the new card i.e. no other card is smaller than it
    e.g. cards be 2 4 5 
     we get new card say 3 
     we swap 3 with 5 i.e. 2 4 3 5
     we swap 3 with 4 i.e. 2 3 4 5 
     we cannot swap any further as 3 is at its correct place so we stop 
*/
function InsertionSort(inputArr) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
}

module.exports = {
    InsertionSort
}