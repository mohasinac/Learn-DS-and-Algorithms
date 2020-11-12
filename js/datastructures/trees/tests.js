
const {BinarySearchTree} =require('./binarySearchTree');
const {BSTArray} =require('./binarySearchTreeArray');
const {
    NodesOfFullBinTreeByHeight,
    PerfectBinTreeNodesByHeight,
    CompleteBinaryTreeNodesbyHeight,
    CompleteBinaryTreeNodesByNodes} =require('./binarytreeprops');
const {KTree} =require('./ktree');
const {HeapTree} =require('./heaptree');
const {AVLTree} =require('./avltree');

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(9);
bst.insert(9);
bst.insert(6);
console.log(bst.search(1));

console.log(bst.root ,'og')
console.log(bst.mirror(),'dup');

console.log(bst.min())
console.log(bst.max())
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
console.log(bst.delete(5))
console.log(bst.preOrder())
console.log(bst.delete(9))
console.log(bst.preOrder())
console.log(bst.height());


let kTree = new KTree(3);
kTree.insertData(1);
kTree.insertData(2);
kTree.insertData(3);
kTree.insertData(4);
kTree.insertData(5);
kTree.insertData(6);
kTree.insertData(7);
kTree.insertData(8);
kTree.insertData(9);
kTree.insertData(10);
kTree.insertData(11);
console.log(kTree.traversal());
console.log(kTree.root);


console.log(NodesOfFullBinTreeByHeight(2));
console.log(PerfectBinTreeNodesByHeight(2));
console.log(CompleteBinaryTreeNodesbyHeight(2));
console.log(CompleteBinaryTreeNodesByNodes(10));


let bstArr = new BSTArray();
bstArr.insert(5);
bstArr.insert(2);
bstArr.insert(1);
bstArr.insert(9);
bstArr.insert(9);
bstArr.insert(6);
console.log(bstArr.search(1));
console.log(bstArr.min())
console.log(bstArr.max())
console.log(bstArr.inOrder())
console.log(bstArr.preOrder())
console.log(bstArr.postOrder())