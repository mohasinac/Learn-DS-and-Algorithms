class TreeNode {
    constructor(data) {
        this.data = data;//the key
        this.children = new Array();// for saving children nodes
    }
}

class Tree {
    constructor(maxChild) {
        this.root = null;
        this.size = 0;
        this.k = maxChild;
    }

    insert(root,newNode){
        let hasPlace = null;
        for(let i=0;i< root.children.length;i++){
            if(root.children[i].children.length< this.k){
                hasPlace = true;
                root.children[i].children.push(newNode);
                return true;
            }
        }
        if(!hasPlace){
            for(let i=0;i<root.children.length;i++){
                hasPlace = this.insert(this.root.children[i],newNode);
                if(hasPlace){
                    return true;
                }
            }
        }
        else{
            return false;
        }
    }
    insertData(data) {
        if(this.root){
            if(this.root.children.length < this.k){
                this.root.children.push(new TreeNode(data))
            }
            else{
                this.insert(this.root,new TreeNode(data));
            }
        }
        else{
            this.root = new TreeNode(data);
        }
    }

    traversal() {
        let order = [];
        function traverse(root) {
            if (root) {
                order.push(root.data);
                for (let i = 0; i < root.children.length; i++) {
                    traverse(root.children[i]);
                }
            }
        }
        traverse(this.root);
        return order;
    }
}

let kTree = new Tree(3);
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