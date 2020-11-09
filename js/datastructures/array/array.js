/*
    Since Javascript does not have its own pointers 
    It is difficult of write array and learn them here
    But let us learn the basic of arrays 
    an array is a continuous data structure where 
    accessing an array element is always O(1)

*/
class JsArray {
    constructor(...dims){
        if(dims && dims.length > 0 && dims.every(i => i >0) && dims.every(i => i <= 100) ){
            let total = 1;
            for(let d of dims ){
                total = total * d;
            }
            this.dims = dims;
            this.size = total;
            this.array = new Array(total);
        }
        else{
            console.log('Invalid Array Dimentions! Range is from 1 - 100');
        }
    }

    dimCheck(pos){
        return this.dims && pos && pos.length <= this.dims.length&&pos.every((i,index)=> i>=0&&i<this.dims[index])
    }
    calculateArrayPosition(pos){
        let arrayPosition = 0;
                for(let i=0;i<pos.length;i++){
                    arrayPosition = pos[i]*this.dims[i];
                }
                return arrayPosition;
    }
    getRowMajor(...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                return this.array[this.calculateArrayPosition(pos)];
            }
        }
        else{
            console.log('Invalid Postition!');
        }
    }

    setRowMajor(data,...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                this.array[this.calculateArrayPosition(pos)] = data;
            }
        }
        else{
            console.log('Invalid Position!')
        }
    }

}

module.exports = {
    JsArray
}


