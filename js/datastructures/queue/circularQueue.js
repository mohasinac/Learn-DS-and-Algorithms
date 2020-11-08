const { Queue } = require('./queue');

class CircularQueue extends Queue{

    constructor(capacity){
        super(capacity);
    }


    enqueue(data){
        if(this.isFull()){
            console.log('Circular Queue is Full!')
            return null;
        }
        else if(this.isEmpty()){
            this.rear = (this.rear + 1) % this.capacity;
            this.front = (this.front + 1) % this.capacity ;
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
            this.queue[this.front] = null;
            this.front = (this.front + 1) % this.capacity ;
            this.size--;
            return result;
        }
    }

}

module.exports = {
    CircularQueue
}