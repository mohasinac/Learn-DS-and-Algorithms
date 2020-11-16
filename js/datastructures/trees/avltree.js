class AVLTreeNode {
    constructor(data) {
        this.data = data || 0;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

//Andelson , velsky , Landis
/*
    BST can become skewed , and cause operations take longer times
    AVL tree is self balancing BST
    where balance of every node is either 0,1,-1 i.e MAth.abs(balance) <=1
    we save height of each node inside the tree
    the number of nodes in tree of height the sum of left and right +1
    n(0) = 1 and n(1) = 2
    this is similar to fibbonacci series
    for avl tree of height h will have node s= 2^h -1
    and h = theata(logn)
    bound : avl tree of n nodes 
    then height would be between log(n+1)<= h <=c*log(n+2) +b 
     where c can be 1.44 b is 0.328
*/
class AVLTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    /*
        left rotation
            A
        B       C
    D       E    Tc
    Td      Te
    let i insert an element X which is x<D<B<A
    now the balance is not there
    pull the imbalanced root up and rotate the tree clockwise
    */
    leftRotate(x) {
        
        //console.log(x,'x');
        //we save the right child of node x at y this will replace x 
        //we save the left right of y as after the change y will not have place for it as y's left would be x
        let y = x.right;
        let T2 = y && y.left || null;

        // Perform rotation 
        // set y's left child to be x
        y.left = x;
        x.right = T2; // set the left child of y as right child of x 

        //  Update heights 
        //calcuate the heights for x and y
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        // Return y as the new root 
        return y;
    }

    /*
        single right rotation
        similar to left rotation but in other direction i.e. each left is replaced by right and 
        vice versa
    */
    rightRotate(y) {
        //console.log(y,'y');
        let x = y.left;
        let T2 = x && x.right || null ;

        // Perform rotation 
        x.right = y;
        y.left = T2;

        // Update heights 
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

        // Return new root 
        return x;
    }

    //AVL tree insertion is all about bst property
    /*
        note : each rotation update node it is performed on
        for an LL do a right-rotate of imbalanced node
        for an RR do a left-rotate of imbalanced node
        for an LR do a left-rotation on the imbalanced node's left node followed by a right-rotate on the imbalanced node
        for an RL do a right-rotation of the imbalanced nodes' right node followed by a left-rotate on the imbalanced node
    */
    insertUtil(node, data) {
        if (node == null) {
           return new AVLTreeNode(data)
        }
        //normal bst insert
        if (data < node.data) {
            node.left = this.insertUtil(node.left, data);
        }
        else {
            node.right = this.insertUtil(node.right, data);
        }
        //setting the nodes height
        let hl = this.height(node.left);
        let hr = this.height(node.right)
        node.height = 1 + this.max(hl,hr);
        //console.log(node.height,'height',hl,hr);
        //actual AVL tree logic (balancing)
        let balance = this.getBalance(node);
        //there are 4 conditions for the node to rotate
        //case 1 : LL rotation (imbalance at left left tree of node )
        if (balance > 1 && node.left && data < node.left.data) {
            console.log('LL',data)
            return this.rightRotate(node);
        }

        //case 2 : RR rotation (imblance at right's right tree of node)
        if (balance < -1 && node.right && data > node.right.data) {
            console.log('RR',data)
            return this.leftRotate(node);
        }

        //case 3 :  LR roation (imbalance at lefts right tree of node)
        if (balance > 1 && node.left && data > node.left.data) {
            console.log('LR',data,)
            node.left = this.leftRotate(node.left);
            //console.log('LR2')
            return this.rightRotate(node);
        }

        //case 4 : RL rotation (imbalance at right's left tree of node)
        if (balance < -1 && node.right && data < node.right.data) {
            console.log('RL',data)
            node.right = this.rightRotate(node.right);
            //console.log('RL2')
            return this.leftRotate(node);
        }
        return node;
    }
    insert(data) {
        if (this.root) {
            this.root = this.insertUtil(this.root, data)
            //console.log(this.root, 'root')
        }
        else {
            this.root = new AVLTreeNode(data);
        }
    }
    height(node) {
        if (node == null)
            return 0;

        return node.height;
    }
    max(a, b) {
        return (a > b) ? a : b;
    }

    /*
        Balance of a node means the height of left sub tree - height of right sub tree
    */
    getBalance(node) {
        if (node == null)
            return 0;

        return this.height(node.left) - this.height(node.right);
    }

    minValueNode(node)  
    {  
        let current = node;  
        //loop till we no longer have a left
        while (current.left != null)  
        current = current.left;  
  
        return current;  
    }

    /*
        We delete as a standard BST delete operation 
        then we update the involved nodes heights
        followed by a balance check from bottom to up for these involved node
        we deleted a node and the balance of its left tree is >=0 we do a right rotation
    */
    deleteNode(root, data)  
    {  
        // STEP 1: PERFORM STANDARD BST DELETE  
        if (root == null)  
            return root;  
  
        // If the data to be deleted is smaller than  
        // the root's data, then it lies in left subtree  
        if (data < root.data)  
            root.left = this.deleteNode(root.left, data);  
  
        // If the data to be deleted is greater than the  
        // root's data, then it lies in right subtree  
        else if (data > root.data)  
            root.right = this.deleteNode(root.right, data);  
  
        // if data is same as root's data, then this is the node  
        // to be deleted  
        else
        {  
  
            // node with only one child or no child  
            if ((root.left == null) || (root.right == null))  
            {  
                let temp = null;  
                if (temp == root.left)  
                    temp = root.right;  
                else
                    temp = root.left;  
  
                // No child case  
                if (temp == null)  
                {  
                    temp = root;  
                    root = null;  
                }  
                else // One child case  
                    root = temp; // Copy the contents of  the non-empty child  
            }  
            else
            {  
  
                // node with two children: Get the in-order successor (smallest in the right subtree)  
                let temp = this.minValueNode(root.right);  
  
                // Copy the inorder successor's data to this node  
                root.data = temp.data;  
  
                // Delete the inorder successor  
                root.right = this.deleteNode(root.right, temp.data);  
            }  
        }  
  
        // If the tree had only one node then return  
        if (root == null)
        {
            return root;
        }  
  
        // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE  
        root.height = this.max(this.height(root.left), this.height(root.right)) + 1;  
  
        // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether  
        // this node became unbalanced)  
        let balance = this.getBalance(root);  
  
        // If this node becomes unbalanced, then there are 4 cases  
        // Left Left Case  
        if (balance > 1 && this.getBalance(root.left) >= 0){
            console.log('LLD',root.data);
            return rightRotate(root); 
        } 
  
        // Left Right Case  
        if (balance > 1 && this.getBalance(root.left) < 0)  
        {
            console.log('LRD',root.data);
            root.left = this.leftRotate(root.left);  
            return this.rightRotate(root);  
        }  
  
        // Right Right Case  
        if (balance < -1 && this.getBalance(root.right) <= 0){
            console.log('RRD',root.data);
            return this.leftRotate(root);  
        }
  
        // Right Left Case  
        if (balance < -1 && this.getBalance(root.right) > 0)  
        {   console.log('RLD',root.data);
            root.right = this.rightRotate(root.right);  
            return this.leftRotate(root);  
        }  
  
        return root;  
    }  

    //delete options may go till the root and can have log(n) rotations
    delete(data){
        if(this.root){
            this.root =  this.deleteNode(this.root,data);
        }
        else{
            return 'EMPTY TREE'
        }
    }
    preOrder() {
        let order = [];
        function preOrderTraversal(root) {
            if (root) {
                order.push(root.data);
                preOrderTraversal(root.left);
                preOrderTraversal(root.right);
            }
        }
        preOrderTraversal(this.root);
        return order;
    }
}

module.exports = {
    AVLTree,
    AVLTreeNode
}

let tree = new AVLTree();
tree.insert(21);
tree.insert(26);
tree.insert(30);
tree.insert(9);
tree.insert(4);
tree.insert(14);
tree.insert(28);
tree.insert(18);
tree.insert(15);
tree.insert(10);
tree.insert(2);
tree.insert(3);
tree.insert(7);
console.log(tree.preOrder())
tree.delete(2);
tree.delete(3);
tree.delete(10);
tree.delete(18);
tree.delete(4);
tree.delete(9);
tree.delete(14);
tree.delete(7);
tree.delete(15);
tree.delete(14);
console.log(tree.preOrder())