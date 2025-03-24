class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{

    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=newNode
        this.length=1
    }
    push(value){
        const newNode=new Node(value)
if(!this.head){
    this.head=newNode
    this.tail=newNode
    
}

this.tail.next=newNode
newNode.prev=this.tail
this.tail=newNode
this.length++;
return this;
    }
    pop(){
if(this.length===1){
    this.head=null
    this.tail=null
}
let temp=this.tail
this.tail=this.tail.prev
this.tail.next=null
        temp.prev=null
        this.length--
        return temp;
    }
    unshift(value){
        let newNode=new Node(value)
        if(!this.head){
this.head=newNode
this.tail=newNode
return;
        }
        let temp=this.head
        this.head=newNode
        newNode.next=temp
        temp.prev=newNode
        this.length++
    }
    shift(){
        if(!this.head){
            return
        }
        let temp=this.head
        if(this.length==1){
            this.head=null
            
            this.tail=null
            
        }

        this.head=this.head.next
        this.head.prev=null
      temp.next=null
    
this.length--;
    }
   
}
const myDoublyLinkedList=new DoublyLinkedList(45)
myDoublyLinkedList.push(24)
// myDoublyLinkedList.push(45)
myDoublyLinkedList.push(65)
myDoublyLinkedList.push(98)
console.log(myDoublyLinkedList)
myDoublyLinkedList.shift()
myDoublyLinkedList.shift()
// myDoublyLinkedList.unshift(87)
console.log(myDoublyLinkedList)