const { Collapse } = require("react-bootstrap");

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.next = 0;
    }
    //Push method recieves a value and adds it to the "top" of the stack
    push(val) {
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    //The pop method eliminate the element at the first of the stack and returns its value
    pop() {
        if(!this.first) return null;
        var temp =this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first)

console.log(stck.first) /* 
        Node {
        value: 'value3',
        next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
        }
    */

        console.log(stck.last) //Node { value:'value1', next:null }
        console.log(stck.size) // 3

        stck.push("value4")
        console.log(stck.pop())