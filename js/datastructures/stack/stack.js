/*
    Stack is First In Last Out 
    Stack using an array
    Stack can also be implemented by using a linked list by inserting at begining always and removing at the begining 
*/
class Stack{
    constructor(capacity){
        this.size = 0;
        this.capacity = capacity;
        this.stack = Array(capacity);
        this.top = -1;
    }

    push(element){
        if((this.size + 1 )<= this.capacity ){
            this.top++;
            this.stack[this.top] = element;
            this.size++;
        }
        else{
            console.log("Error- Stack Overflow")
            return null;
        }
    }
    pop(){
        if(this.size>0){
            const element = this.stack[this.top];
            this.stack[this.top] = null;
            this.top--;
            this.size--;
            return element;
        }
        else{
            console.log("Error- Stack Underflow")
            return null;
        }
    }
    showStack(){
        if(this.size>0){
            console.log(this.stack);
            console.log(this.top);
        }
        else{
            console.log("Stack Empty")
        }
    }
}

module.exports = {
    Stack
}