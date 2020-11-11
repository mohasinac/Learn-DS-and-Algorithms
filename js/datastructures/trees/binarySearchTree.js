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

    search(key){
        let temp = this.root;
        while(temp){
            if(key == temp.data){
                return temp;
            }
            else if(key < temp.data){
                temp = temp.left;
            }
            else{
                temp = temp.right;
            }
        }
        return -1;
    }

    min(){
        let temp = this.root;
        while(temp){
            if(temp.left){
                temp= temp.left;
            }
            else{
                break;
            }
        }
        return (temp && temp.data) || 'Tree Empty';
    }
    
    max(){
        let temp = this.root;
        while(temp){
            if(temp.right){
                temp= temp.right;
            }
            else{
                break;
            }
        }
        return (temp && temp.data) || 'Tree Empty';
    }

    //Traversal
    //left-root-right
    //always sorted order cannot find root
    inOrder(){
        let order = [];
        function inorderTraversal(root){
            if(root){
                inorderTraversal(root.left);
                order.push(root.data);
                inorderTraversal(root.right);
            }
        }
        inorderTraversal(this.root);
        return order;
    }
    //root,left,right 
    //first is root always
    preOrder(){
        let order =[];
        function preOrderTraversal(root){
            if(root){
                order.push(root.data);
                preOrderTraversal(root.left);
                preOrderTraversal(root.right);
            }
        }
        preOrderTraversal(this.root);
        return order;
    }

    //last item is always root
    //left,right,root
    postOrder(){
        let order = [];
        function postOrderTraversal(root){
            if(root){
                postOrderTraversal(root.left);
                postOrderTraversal(root.right);
                order.push(root.data);
            }
        }
        postOrderTraversal(this.root);
        return order;
    }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(9);
bst.insert(9);
bst.insert(6);
console.log(bst.search(1));

console.log(bst.min())
console.log(bst.max())
console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())
module.exports = {
    BinarySearchTree ,
    BinaryTreeNode
}