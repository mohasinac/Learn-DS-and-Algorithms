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

    insertData(data) {
        let newNode = new TreeNode(data);
        if(this.root){
            let temp = this.root;
            if(temp.children.length < this.k){
                temp.children.push(newNode);
            }
            else{
                for(let i=0;i < this.k;i++){
                    let temp2 = temp.children[i];
                    if(temp2.children.length < this.k){
                        temp2.children.push(newNode);
                        break;
                    }
                }
            }
        }
        else{
            this.root = newNode;
        }
    }
    traversal(){
        function traverse(root){
            if(root){
                console.log(root.data);
                for(let i=0;i< root.children.length;i++){
                    traverse(root.children[i]);
                }
            }
        }
        traverse(this.root);
    }
}

let kTree = new Tree(2);
kTree.insertData(1);
kTree.insertData(2);
kTree.insertData(3);
kTree.insertData(4);
kTree.insertData(5);
kTree.insertData(6);
kTree.insertData(7);
kTree.traversal();