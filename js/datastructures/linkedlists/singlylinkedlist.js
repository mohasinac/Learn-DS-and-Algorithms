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
            this.size += 1;
        }
        else if (position < this.size) {
            let temp = this.head;
            let pos = 0;
            while (temp && pos != position - 1) {
                temp = temp.next;
                pos++;
            }
            if(temp){
                sslNode.next = temp.next;
                temp.next = sslNode;
                this.size += 1;
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
        this.size -= 1;
    }
    delete(value){
        if(this.size>0){
            if(this.size == 1){
                if(this.head.data == value){
                    this.head = null;
                    this.size--;
                }
            }
            else{
                let temp = this.head;
                let prev = temp;
                while(temp && temp.data != value){
                    prev = temp;
                    temp = temp.next;
                }
                if(temp){
                    prev.next = temp.next;
                    this.size--;
                }
            }
        }
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
            this.size -= 1;
            return result;
        }
        else {
            console.log('Invalid Position Provided');
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SllNode
}