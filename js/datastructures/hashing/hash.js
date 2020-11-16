function ModuloHashFunction(data) {
    return key;
}
function MultiplicationHashFunction(data) {
    return key;
}

class Hashtable{
    constructor(size, type='modulo'){
        this.table = new Array();
        if(type === 'modulo'){
            this.hashfunction = ModuloHashFunction; 
        }
        else{
            this.hashfunction = MultiplicationHashFunction;
        }
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