/*
    O(logn)
    divides the array into two parts each time it misses and search in the area where the 
    key is likely to be present
 */
function BinarySearchRec(inputArr, key, s, l) {
    if (s > l) {
        return -1;
    }
    mid = Math.floor((s + l) / 2);
    if (inputArr[mid] == key) {
        return mid;
    }
    else if (inputArr[mid] > key) {
        return BinarySearchRec(inputArr, key, s, mid - 1);
    }
    else {
        return BinarySearchRec(inputArr, key, mid + 1, l);
    }
    console.log('end');
}

function BinarySearchIter(inputArr, key) {
    s = 0;
    l = inputArr.length - 1;
    while (l >= s) {
        mid = Math.floor((s + l) / 2);
        if (inputArr[mid] == key) {
            return mid;
        }
        else if (inputArr[mid] > key) {
            l = mid - 1;
        }
        else {
            s = mid + 1
        }
    }
    return -1;
}
let testArr = [1, 1, 2, 3, 4, 5, 6, 6, 7, 8];
console.log(BinarySearchIter(testArr, 5))
console.log(BinarySearchIter(testArr, 9))

console.log(BinarySearchRec(testArr, 5 , 0 , 9))
console.log(BinarySearchRec(testArr, 9 , 0 , 9))

module.exports = {
    BinarySearchRec,
    BinarySearchIter
}