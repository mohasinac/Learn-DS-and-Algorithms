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

    }

    //O(1)
    delete(data){

    }
    
    //O(1)
    search(key){

    }
}