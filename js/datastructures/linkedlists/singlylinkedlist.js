class SllNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    checkLoop() {
        let slow = this.head;
        let fast = this.head;
        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                console.log(slow.data, fast.data)
                this.removeLoop(slow)
                return true;
            }
        }
        return false;
    }
    removeLoop(loop_node) {
        let ptr1;
        let ptr2;
        ptr1 = this.head;
        while (1) {
            ptr2 = loop_node;
            while (ptr2.next != loop_node && ptr2.next != ptr1) //finding previous node before the loop
                ptr2 = ptr2.next;
            if (ptr2.next == ptr1)
                break;
            ptr1 = ptr1.next;  // inner loop break finding
        }
        ptr2.next = null;
    }
    createLoop() {
        let temp = this.head;
        while (temp && temp.next) {
            temp = temp.next;
        }
        temp.next = this.head;
    }
    find(key) {
        let temp = this.head;
        let idx = -1;
        while (temp) {
            idx += 1;
            if (key == temp.data) {
                return idx;
            }
            temp = temp.next;
        }
        return idx;
    }
    insert(data) {
        let sllNode = new SllNode(data);
        if (this.size === 0) {
            this.head = sllNode;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = sllNode;
        }
        this.size += 1;
    }
    insertAt(data, position) {
        let sslNode = new SllNode(data);
        if (position == 0) {
            sslNode.next = this.head;
            this.head = sslNode;
        }
        else if (position < this.size) {
            let temp = this.head;
            let pos = 0;
            while (temp && pos != position - 1) {
                temp = temp.next;
                pos++;

                sslNode.next = temp.next;
                temp.next = sslNode;
            }
        }
        else {
            console.log('error out of bounds');
        }
    }
    traverse() {
        let temp = this.head;
        let count = 0;
        while (temp) {
            console.log(temp.data, count++);
            temp = temp.next;
        }
        console.log('');
    }
    delete() {
        let temp = this.head;
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
    }
    deleteAt(position) {
        let temp = this.head;
        if (this.size <= 0) {
            return 'Empty List';
        }
        else if (position < this.size) {
            let pos = 0;
            while (temp && pos != position - 1) {
                pos += 1;
                temp = temp.next;
            }
            let result = temp.next;
            temp.next = temp.next.next;
            return result;
        }
        else {
            console.log('Invalid Position Provided');
        }
    }
}

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