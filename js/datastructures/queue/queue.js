/*
    Queue is a FIFO
    Mainly used for printing queues
*/
class Queue {


    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(capacity).fill(null);
    }


    enqueue(data){
        if(this.isFull()){
            console.log('Queue is Full!')
            return null;
        }
        else if(this.isEmpty()){
            this.rear++;
            this.front++;
            this.queue[this.rear] = data
            this.size++;
        }
        else{
            if(this.rear + 1 < this.capacity){ 
                this.rear++;
                this.queue[this.rear] = data;
                this.size++;
            }
        }
    }


    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is Empty!')
            return null;
        }
        else{
            let result = this.queue[this.front];
            this.queue[this.front] = null;
            this.front++;
            this.size--;
            return result;
        }
    }

    showQueue(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }
        else{
            console.log(this.queue);
        }
    }

    isEmpty(){
        return this.front == this.rear;
    }


    isFull(){
        return this.size == this.capacity;
    }
}

module.exports = {
    Queue
}