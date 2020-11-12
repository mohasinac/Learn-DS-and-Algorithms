class AVLTreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVLTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }
}

module.exports = {
    AVLTree,
    AVLTreeNode
}