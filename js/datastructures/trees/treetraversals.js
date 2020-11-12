const { BinaryTreeNode } = require('./binarySearchTree');

function TreeFromPreAndInOrder( inOrder,preOrder) {
    let preIdx = 0;
    function buildTree(inOrder , preOrder , start, end){
        if (start > end || !preOrder[preIdx]) {
            return null;
        }
        /* Pick current node from Preorder traversal using preIndex 
               and increment preIndex */
        let tNode = new BinaryTreeNode(preOrder[preIdx]);
        preIdx +=1;
        /* If this node has no children then return */
        if (start == end)
            return tNode;
    
        /* Else find the index of this node in Inorder traversal */
        let inIndex = search(inOrder, start, end, tNode.data);
    
        /* Using index in Inorder traversal, construct left and 
           right subtress */
        tNode.left = buildTree(inOrder, preOrder, start, inIndex - 1 );
        tNode.right = buildTree(inOrder, preOrder, inIndex + 1, end );
    
        return tNode;
    }
    return buildTree(inOrder,preOrder,0,inOrder.length);
}

function search(arr, strt, end, value)
{
    let i;
    for (i = strt; i <= end; i++) {
        if (arr[i] == value){
            return i;
        }
    }
    return 0;
}

function TreeFromPostAndInOrder(inOrder,postOrder){
    let postIdx = postOrder.length - 1;

    function buildTree(inOrder,postOrder , start, end){
        if (start > end || !postOrder[postIdx]) {
            return null;
        }
        /* Pick last node from postOrder traversal using preIndex 
               and increment preIndex */
        let tNode = new BinaryTreeNode(postOrder[postIdx]);
        postIdx -=1;
        /* If this node has no children then return */
        if (start == end)
            return tNode;
    
        /* Else find the index of this node in Inorder traversal */
        let inIndex = search(inOrder, start, end, tNode.data);
    
        /* Using index in Inorder traversal, construct right and 
           left subtress */
        
        tNode.right = buildTree(inOrder, postOrder, inIndex + 1, end );
        tNode.left = buildTree(inOrder, postOrder, start, inIndex - 1 );
    
        return tNode;
    }
    return buildTree(inOrder,postOrder , 0 , inOrder.length-1);
}

module.exports = {
    TreeFromPreAndInOrder,
    TreeFromPostAndInOrder
}
