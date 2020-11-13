function Heapify(arr ,n, pos){
    if(arr[pos]){
        let left = 2*pos+1;
        let right = 2*pos+2;
        let largest = pos;
        if(left < n && arr[left] && arr[left] > arr[largest]){
            largest = left;
        }
        if(right<n && arr[right] && arr[right] > arr[largest]){
            largest = right;
        }
        if(largest != pos){
            //console.log(largest,pos ,arr[largest] , arr[pos])
            temp = arr[pos];
            arr[pos] = arr[largest];
            arr[largest] = temp;
            console.log(arr, 'heapufy')
            Heapify(largest);
        }
    }
}

const { BTreeArray } = require('./binaryTreeArray');

class HeapArray{
    constructor(){
        this.heap = new BTreeArray();
        this.heapify = Heapify;
    }

    add(data){
        this.heap.insert(data);
        this.build();
        //console.log(this.heap.tree)
    }

    build(){
        let heapify = this.heapify;
        let heap = this.heap.tree;
        function buildHeap(heap){
            //as n/2 are only internal nodes
            for(let i= Math.floor((heap.length -1) /2); i>=0; i--){
                heapify(heap ,heap.length, i);
            }
        }
        buildHeap(heap);
    }
}

module.exports = {
    HeapArray,
    Heapify
}
let heap = new HeapArray();
heap.add(1);
heap.add(2);
heap.add(3);
heap.add(5);
heap.add(7);
heap.add(4);