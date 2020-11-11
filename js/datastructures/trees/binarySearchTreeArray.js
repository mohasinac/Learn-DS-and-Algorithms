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
        while(this.tree[pos]){
            if(key==this.tree[pos]){
                return pos;
            }
            else if( key < this.tree[pos]){
                pos = 2*pos + 1;
            }
            else{
                pos = 2*pos+2;
            }
        }
        return -1;
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
console.log(bst.search(1));
console.log(bst.min())
console.log(bst.max())