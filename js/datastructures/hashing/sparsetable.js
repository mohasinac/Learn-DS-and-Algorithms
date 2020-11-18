/**
  In sparse matrix we can solve the problem by solving only
  the cells which are non-zero in to list
  hash table of key as (row,col) e.g. 2:3
  convert string to integer and sum them up
  and the value inside this key of the hash table 
 */
class SparseMatrix{
    constructor(rows,cols){
        this.table = new Array();
    }
    insert(r,c,key){
        let key = `${r}:${c}`;
        for(let i=0;i< 101 ; i++){
            let hash = (key + i + r + c) % 101;
            if(this.table[hash]){
                continue;
            }
            else{
                this.table[hash] = key+`:${key}`;
            }
        }
    }
}

module.exports = {
    SparseMatrix
}