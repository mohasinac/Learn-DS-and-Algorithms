class Hashtable{
    constructor(size, type='None'){
        this.table = new Array();
    }
    hashfunction(key){
        return key % 101;
    }
    //O(1)
    insert(data){
        let key = this.hashfunction(data);
        if(!this.table[key]){
            this.table[key] = data;
        }
    }

    //O(1)
    delete(data){
        let key = this.hashfunction(data);
        this.table.splice(key,1)
    }

    //O(1)
    search(data){
        let key = this.hashfunction(data);
        return this.table[key]
    }
}