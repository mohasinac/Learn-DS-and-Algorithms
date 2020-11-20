const { Queue } = require('./queue');

class CircularQueue {

    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(capacity).fill(null);
    }

    isFull(){
        return false;
    }

    isEmpty(){
        return false;
    }

    enqueue(data){
        if(!this.isFull()){
        if(this.isEmpty()){
            this.rear = (this.rear + 1) % this.capacity;
            this.front = (this.front +1 ) % this.capacity;
            this.queue[this.rear] = data
            this.size++;
        }
        else{
            this.rear = (this.rear + 1) % this.capacity;
            this.queue[this.rear] = data;
            this.size++;
        }
    }


    dequeue(){
        if(this.isEmpty()){
            console.log('Circular Queue is Empty!')
            return null;
        }
        else{
            let result = this.queue[this.front];
            console.log(this.front,this.queue);
            this.queue[this.front] = null;
            this.front = (this.front + 1) % this.capacity ;
            console.log(this.front,this.queue);
            this.size--;
            return result;
        }
    }

}

module.exports = {
    CircularQueue
}