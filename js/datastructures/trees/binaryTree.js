const { BinaryTreeNode } = require('./binarySearchTree');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root == null) {
            this.root = new BinaryTreeNode(data);
            return;
        }
        let q = [];
        q.push(this.root);
        while (q.length>0) {
            let temp = q[0];
            q=q.filter((i,index)=>index!=0);
            if (temp.left == null) {
                temp.left = new BinaryTreeNode(data);
                break;
            }
            else
                q.push(temp.left);
 
            if (temp.right == null) {
                temp.right = new BinaryTreeNode(data);
                break;
            }
            else
                q.push(temp.right);
        }
    }
}

let bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);
console.log(bt.root);
