
//this guys time complexity is always O(logn)
//because we go towards a single branch instead both when it would have been O(n)
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root 
    let l = 2 * i + 1; // left = 2*i + 1 
    let r = 2 * i + 2; // right = 2*i + 2 

    // If left child is larger than root 
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far 
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root 
    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree 
        heapify(arr, n, largest);
    }
}



//this guys time complexity is O(nlogn)
// n for the loop and logn for calling heapify
//also building the heaps cost around O(n)
function HeapSort(arr) {
    let n = arr.length;
    // Build heap (rearrange array)  this step is most important and always build heap not just call 
    //heapify
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap 
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end 
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap 
        heapify(arr, i, 0);
    }
    return arr;
}

let testArr = Array(5, 6, 3, 4, 2, 8, 7, 1);
console.log(HeapSort(testArr));