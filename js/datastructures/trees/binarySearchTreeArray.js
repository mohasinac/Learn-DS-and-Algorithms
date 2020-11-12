// for a node at i left tree is at 2i and right tree is at 2i+1
class BSTArray{
    constructor(){
        this.tree = new Array();
        this.size = 0;
    }
    insert(data){
        let pos = 0;
        if(this.tree[pos]){
            while(this.tree[pos]){
                if(this.tree[pos]> data){
                    if(this.tree[2*pos+1]){
                        pos = 2*pos+1;
                    }
                    else{
                        this.tree[2*pos+1]=data;
                        break;
                    }
                }
                else{
                    if(this.tree[2*pos+2]){
                        pos = 2*pos+2;
                    }
                    else{
                        this.tree[2*pos+2]=data;
                        break;
                    }
                }
            }
        }
        else{
            this.tree[pos]=data;
        }
        this.size++;
    }

    search(key){
        let pos = 0;
        let parentPos = null;
        let left = null;
        while(this.tree[pos]){
            if(key==this.tree[pos]){
                return { 
                    pos,
                    left,
                    parentPos
                };
            }
            else if( key < this.tree[pos]){
                parentPos = pos;
                left = true;
                pos = 2*pos + 1;
            }
            else{
                parentPos =pos;
                left = false;
                pos = 2*pos+2;
            }
        }
        return {
            pos : -1,
            parentPos : null
        };
    }
    min(){
        let pos = 0;
        while(this.tree[pos]){
            if(this.tree[2*pos+1]){
                pos= 2*pos +1
            }
            else{
                break;
            }
        }
        return this.tree[pos] || 'Tree Empty'
    }
    max(){
        let pos = 0;
        while(this.tree[pos]){
            if(this.tree[2*pos+2]){
                pos= 2*pos +2
            }
            else{
                break;
            }
        }
        return this.tree[pos] || 'Tree Empty'
    }

    //traversals
    //left,root,right
    inOrder(){
        let order =[];
        let pos = 0;
        let tree= this.tree;
        function inOrderTraversal(pos){
            if(tree[pos]){
                inOrderTraversal(2*pos+1);
                order.push(tree[pos]);
                inOrderTraversal(2*pos+2);
            }
        }
        inOrderTraversal(pos);
        return order;
    }
    //root,left,right
    preOrder(){
        let order =[];let pos = 0;
        let tree= this.tree;
        function preOrderTraversal(pos){
            if(tree[pos]){
                order.push(tree[pos]);
                preOrderTraversal(2*pos+1);
                preOrderTraversal(2*pos+2);
            }
        }
        preOrderTraversal(pos);
        return order;
    }
    //left,right,root
    postOrder(){
        let order =[];
        let pos = 0;
        let tree= this.tree;
        function postOrderTraversal(pos){
            if(tree[pos]){
                postOrderTraversal(2*pos+1);
                postOrderTraversal(2*pos+2);
                order.push(tree[pos]);
            }
        }
        postOrderTraversal(pos);
        return order;
    }
}

module.exports = {
    BSTArray
}