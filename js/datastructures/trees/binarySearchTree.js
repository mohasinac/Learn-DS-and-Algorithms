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
        let parent = null;
        let left = false;
        let temp = this.root;
        while(temp){
            if(temp.data == key){
                return {
                    parent,
                    node : temp,
                    left,
                }
            }
            else if(temp.data > key){
                parent = temp;
                left = true;
                temp = temp.left;
            }
            else{
                parent = temp;
                left = false;
                temp = temp.right;
            }
        }
        return {
            node:null,
            parent:null,
            left : false,
        }
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
    //infix expr
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
    //prefix 
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
    //postfix expr
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

    //delete has 3 case
    //when there are no children -> just delete
    //when there are one children -> choose the only child
    //when there are 2 children -> replace the node with the min node in right sub tree
    delete(data){
        let minParent = null;
        function min(root){
            let temp = root;
            while(temp){
                if(temp.left){
                    minParent = temp;
                    temp = temp.left;
                }
                else{
                    break;
                }
            }
            return temp;
        }

        let { parent , left , node } = this.search(data);
        if(node){
            if(node.left == null && node.right == null){
                //case 1 no child just delete
                if(parent){
                    if(left){
                        parent.left = null;
                    }
                    else{
                        parent.right = null;
                    }
                }
                else{
                    node = null;
                }
            }
            else if( node.left == null || node.right == null){
                //case 2 : 1 child , replace with child
                let newNode = null;
                if(node.left){
                    newNode = node.left;
                }
                else{
                    newNode = node.right;
                }
                if(left){
                    parent.left = newNode;
                }
                else{
                    parent.right = newNode;
                }
            }
            else {
                //case 3 : 2 children , replace with next inorder node
                //min parent is to get the parent of the minimum node and we node it woulde b always at the left
                //side
                let minNode = min(node.right);
                if(minParent){
                    minParent.left = null;
                }
                minNode.left = node.left;
                minNode.right = node.right;
                if(parent){
                    if(left){
                        parent.left = minNode;
                    }
                    else{
                        parent.right = minNode;
                    }
                }
                else{
                    this.root = minNode;
                }              
            }
        }
        else{
            return 'not present in tree!'
        }
        this.size--;
        return 'deleted!' 
    }

    height(){
        let node = this.root;
        function max(a,b){
            return a>b? a : b;
        }
        function height(root,d){
            if(root){
                let dR = d;
                let dL = d;
                if(root.left){
                    dL = height(root.left,d+1);
                }
                if(root.right){
                    dR = height(root.right,d+1);
                }
                return max(dR,dL)
            }
            return d;
        }
        return height(node,0);
    }

    mirror(){
        function mirror(root){
            let mirrorRoot = new BinaryTreeNode(root.data);
            if(root.left || root.right){
                if(root.left){
                    mirrorRoot.right = mirror(root.left);
                }
                if(root.right){
                    mirrorRoot.left =  mirror(root.right);
                }
            }
            return mirrorRoot;
        }
        let mirrorRoot = mirror(this.root)
        return mirrorRoot;
    }

    levelOrder(){
        let order = []
        function  levelOrder(root) {
            let queue = [];
            queue.push(root);
        while (queue.length > 0) 
        {
            let tempNode = queue[0];
            queue = queue.filter( (i,index) => index != 0);
            order.push(tempNode.data);
            /*Enqueue left child */
            if (tempNode.left != null) {
                queue.push(tempNode.left);
            }
 
            /*Enqueue right child */
            if (tempNode.right != null) {
                queue.push(tempNode.right);
            }
        }
        }
    }
}

module.exports = {
    BinarySearchTree ,
    BinaryTreeNode
}