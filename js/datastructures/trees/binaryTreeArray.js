class BTreeArray{
    constructor(){
        this.tree = new Array();
    }

    insert(data){
        this.tree.push(data);
    }
}

module.exports = {
    BTreeArray
}