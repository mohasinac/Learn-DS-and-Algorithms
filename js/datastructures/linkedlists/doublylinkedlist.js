class DllNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(data) {
        let DllNode = new DllNode(data);
        if (this.size === 0) {
            this.head = DllNode;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = DllNode;
            DllNode.prev = temp;
        }
        this.size += 1;
    }
    insertAt(data, position) {
        let dllNode = new DllNode(data);
        if (position == 0) {
            temp = this.head;
            dllNode.next = temp;
            temp.prev = dllNode;
            this.head = dllNode;
            this.size += 1;
        }
        else if (position < this.size) {
            let temp = this.head;
            let pos = 0;
            while (temp && pos != position - 1) {
                pos++;
                temp = temp.next;
            }
            if(temp){
                dllNode.next = temp;
                dllNode.prev = temp.prev;
                temp.prev = dllNode;
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
        if(temp){
            while (temp&&temp.next&&temp.next.next) {
                temp = temp.next;
            }
            temp.next = null;
            this.size -= 1;
        }
    }
    deleteAt(position) {
        let temp = this.head;
        if (!temp || this.size <= 0) {
            return 'Empty List';
        }
        else if (position < this.size) {
            let pos = 0;
            while (temp && pos != position - 1) {
                pos += 1;
                temp = temp.next;
            }
            let result = temp.next;
            temp.next.next.prev = temp
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
    DllNode,
    DoublyLinkedList
}