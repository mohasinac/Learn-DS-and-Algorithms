class Stack{
    constructor(capacity){
        this.size = 0;
        this.capacity = capacity;
        this.stack = Array(capacity);
        this.top = -1;
    }

    push(element){
        console.log(this.stack)
        if((this.size + 1 )<= this.capacity ){
            this.top++;
            this.stack[this.top] = element;
            this.size++;
        }
        else{
            console.log("Error- Stack Overflow")
        }
    }
    pop(){
        if(this.size>0){
            const element = this.stack[this.top];
            this.stack[this.top] = null;
            this.top--;
            this.size--;
        }
        else{
            console.log("Error- Stack Underflow")
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

let stack = new Stack(5);
stack.push(5)
stack.push(2)
stack.push(9)
stack.push(6)
stack.push(1);
stack.showStack();
stack.pop()
stack.showStack();
