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
        console.log(this.tree);
        this.size++;
    }
}

module.exports = {
    BSTArray
}


let bst = new BSTArray();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(9);
bst.insert(9);
bst.insert(6);