class BinaryTreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }
    insert(data){
        let node = new BinaryTreeNode(data);
        if(this.root){
            let temp = this.root;
            while(temp){
                if(temp.data > data){
                    if(temp.left){
                        temp = temp.left;
                    }
                    else{
                        temp.left = node;
                        break;
                    }
                }
                else{
                    if(!temp.right){
                        temp.right = node;
                        break;
                    }
                    else{
                        temp = temp.right;
                    }
                }
            }
            temp = node
        }
        else{
            this.root = node;
        }
        this.size++;        
    }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(9);
bst.insert(9);
bst.insert(6);

module.exports = {
    BinarySearchTree ,
    BinaryTreeNode
}