
class CircularQueue {

    constructor(size){
        this.size = size;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(size).fill(null);
    }

    isFull(){
        return (this.front == 0 && this.rear == this.size - 1) || (this.rear == (this.front - 1) % (this.size - 1));
    }

    hasSingle(){
        return (this.front == this.rear)
    }
    isEmpty(){
        return (this.front == -1 );
    }

    enqueue(data){
        if(!this.isFull()){
            if(this.isEmpty()){
                this.front = 0;
                this.rear = 0;
                this.queue[this.rear] = data;
            }
            else if(this.rear == this.size -1 && this.front !=0){
                this.rear = 0;
                this.queue[this.rear] = data;
            }
            else{
                this.rear = this.rear +1 ;
                this.queue[this.rear] = data;
            }
        }
    }


    dequeue(){
        let temp;
        if(!this.isEmpty()){
            temp = this.queue[this.front];
        }
        if(this.hasSingle()){
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front ==this.size - 1){
            this.front =0;
        }
        else{
            this.front = this.front + 1;
        }
        return temp;
    }

}

module.exports = {
    CircularQueue
}