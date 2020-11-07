
const { bubbleSort } = require('./bubbleSort');

var testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);

console.log('bubbleSort',bubbleSort(testArr));

const {selectionSort} = require('./selectionSort');

testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);

console.log('selectionSort',selectionSort(testArr));

const {quickSort} = require('./quickSort')

testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);

console.log('quickSort',quickSort(testArr, 0 , testArr.length-1));

const { sedgewickQS } = require('./sedgewickQuickSortMod');
testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);
console.log('sedgewickQS',sedgewickQS(testArr, 0 , testArr.length-1))

const {mSort } = require('./mergeSort');

testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);

console.log('mSort',mSort(testArr));

const {InsertionSort} = require('./insertionSort');

testArr =  Array(5, 6, 3, 4, 2, 8 , 7, 1);
console.log('InsertionSort',InsertionSort(testArr))

const { countingSort } = require('./countingSort');

testArr =  Array(5, 6, 3,3,3, 4, 2 , 2, 2,1, 8 ,7 , 7, 1);

console.log('countingSort',countingSort(testArr , 8));