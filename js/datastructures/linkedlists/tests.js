const {SinglyLinkedList} = require('./singlylinkedlist');

let sll = new SinglyLinkedList();
sll.traverse();
sll.insert(5);
sll.insert(2);
sll.insert(2);
sll.insert(9);
sll.insert(9);
sll.insert(6)
sll.insert(6)
sll.traverse();
sll.delete();
sll.insertAt(1, 2);
sll.insertAt(0, 0);
sll.insertAt(0, 2);
sll.deleteAt(5);
sll.traverse();
console.log(sll.find(5))
sll.createLoop();
console.log(sll.checkLoop())
sll.traverse();
console.log(sll.checkLoop())
