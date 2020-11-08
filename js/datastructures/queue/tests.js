const { Queue } = require('./queue');
const { CircularQueue } = require('./circularQueue');


let queue = new Queue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(1);
queue.showQueue();
console.log(queue.dequeue());
queue.enqueue(6);
queue.showQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.showQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.showQueue();
console.log(queue.dequeue());



let cqueue = new CircularQueue(5);
cqueue.enqueue(2);
cqueue.enqueue(3);
cqueue.enqueue(4);
cqueue.enqueue(5);
cqueue.enqueue(6);
cqueue.enqueue(1);
cqueue.showQueue();
console.log(cqueue.dequeue());
cqueue.enqueue(6);
cqueue.showQueue();
console.log(cqueue.dequeue());
console.log(cqueue.dequeue());
cqueue.enqueue(6);
cqueue.enqueue(6);
cqueue.showQueue();
console.log(cqueue.dequeue());
console.log(cqueue.dequeue());
cqueue.showQueue();
console.log(cqueue.dequeue());