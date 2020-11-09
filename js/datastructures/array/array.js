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
            this.array = null;
            console.log('Invalid Array Dimentions! Range is from 1 - 100');
        }
    }

    dimCheck(pos){
        return this.dims && pos && pos.length <= this.dims.length&&pos.every((i,index)=> i>=0&&i<this.dims[index])
    }

    /*  
    for 3*4 array col major listing would be like this for 1,2 would mean
      [
       0,4,8
       1,5,9,
       2,6,10,
       3,7,11
      ]

      formula for i,j is 
      i+(j*r)
     */
    calculateArrayPositionCol(pos){
        let arrayPosition = pos[0];
        let l = pos.length;
        for(let i=0; i < l-1;i++){
            arrayPosition += this.dims[i]*pos[i+1];
        }
        return arrayPosition;
    }

     /*  
    for 3*4 array row major listing would be like this
      [
       0,1,2,3
       4,5,6,7
       8,9,10,11
      ]

      formula is for j,j
      ((i*c) + j)
     */
    calculateArrayPositionRow(pos){
        let arrayPosition = 0;
        let l = this.dims.length;
        for(let i=1; i <this.dims.length;i++){
            arrayPosition += this.dims[i]*pos[i-1];
        }
        arrayPosition += pos[l-1]
        return arrayPosition;
    }
       
    getRowMajor(...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                return this.array[this.calculateArrayPositionRow(pos)];
            }
        }
        else{
            console.log('Invalid Postition!');
        }
    }
    getColMajor(...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                return this.array[this.calculateArrayPositionCol(pos)];
            }
        }
        else{
            console.log('Invalid Postition!');
        }
    }

    setRowMajor(data,...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                this.array[this.calculateArrayPositionRow(pos)] = data;
            }
        }
        else{
            console.log('Invalid Position!')
        }
    }

    setColMajor(data,...pos){
        if(this.dimCheck(pos)){
            if(pos.length == this.dims.length){
                this.array[this.calculateArrayPositionCol(pos)] = data;
            }
        }
        else{
            console.log('Invalid Position!')
        }
    }


    show(){
        return this.array;
    }
}

module.exports = {
    JsArray
}


