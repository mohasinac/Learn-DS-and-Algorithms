class KTreeNode {
    constructor(data) {
        this.data = data;//the key
        this.children = new Array();// for saving children nodes
    }
}

class KTree {
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
                this.root.children.push(new KTreeNode(data))
            }
            else{
                this.insert(this.root,new KTreeNode(data));
            }
        }
        else{
            this.root = new KTreeNode(data);
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

module.exports = {
    KTreeNode,
    KTree
}
