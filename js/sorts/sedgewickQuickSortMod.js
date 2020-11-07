const { partition } = require('./quickSort');

/*
    Quick Sort has O(n) space complexity as it takes space in the call stack
    To overcome this Segdewick solution is to sort only the smallest ones fist then move to larger ones
    the lines p=q+1 and 
    r = q-1 are there so that the while loop iterates atlest 2 times with each if condition executing once 
*/
function sedgewickQS(inputArr, p, r) {
    while (p < r) {
        q = partition(inputArr, p, r);
        if (q - p < r - q) {
            sedgewickQS(inputArr, p, q - 1);
            p=q+1
        }
        else {
            sedgewickQS(inputArr, q + 1, r);
            r = q-1;
        }
    }
    return inputArr;
}

module.exports = {
    sedgewickQS
}