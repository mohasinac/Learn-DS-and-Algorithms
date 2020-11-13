//Heapify is a function where for a tree we have left sub tree as a heap
//and right sub tree is also a heap
//but the root is not a heap
//we convert that tree into a heap tree 
//with the help of heapify

/*
working : 
we take the node which is behaving incorrectly
and then we compare it with its children
then we replace the node with with its children
and then we call heapify on the replaced node
*/
function MaxHeapify(treeRoot) {
    if (treeRoot) {
        let left = treeRoot.left
        let right = treeRoot.right;
        let largest = treeRoot;
        if (left && left.data > treeRoot.data) {
            largest = left;
        }
        if (right && right.data > largest.data) {
            largest = right;
        }
        if (largest && largest.data != treeRoot.data) {
            temp = treeRoot.data;
            treeRoot.data = largest.data;
            largest.data = temp;
            MaxHeapify(largest);
        }
    }
}

function MinHeapify(treeRoot) {
    if (treeRoot) {
        let left = treeRoot.left
        let right = treeRoot.right;
        let smallest = treeRoot;
        if (left && left.data < treeRoot.data) {
            smallest = left;
        }
        if (right && right.data < smallest.data) {
            smallest = right;
        }
        if (smallest && smallest.data != treeRoot.data) {
            temp = treeRoot.data;
            treeRoot.data = smallest.data;
            smallest.data = temp;
            MinHeapify(smallest);
        }
    }
}

const { BinaryTree } = require('./binaryTree');
//is a complete binary tree
//there can be min and max heap
//where every parents nodes value is greater than or equal the value of child node
// need : find max element very fast
class Heap {
    constructor(type) {
        this.heap = new BinaryTree();
        if(type==='max'){
            this.heapify = MaxHeapify;
        }
        else{
            this.heapify = MinHeapify;
        }
    }

    add(data){
        this.heap.insert(data);
        this.build();
        console.log(this.heap);
    }
    build(){
        let root = this.heap.root;
        let heapify = this.heapify;
        function buildHeap(rootNode){
            if(rootNode){
                if(rootNode.left || rootNode.right){
                    buildHeap(rootNode.left);
                    buildHeap(rootNode.right);
                    heapify(rootNode);
                }
            }
            
        }
        buildHeap(root);
    }
}

module.exports = {
    Heap,
    MaxHeapify,
    MinHeapify
}

let heap = new Heap('max');
heap.add(1);
heap.add(2);
heap.add(3);
heap.add(5);
heap.add(7);
heap.add(4);