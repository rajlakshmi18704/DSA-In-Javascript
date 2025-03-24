class Node{
constructor(value){
    this.value=value,
    this.next=null
}
}
class LinkedList{
    constructor(value){
        let newLinkedList=new Node(value)
        this.head=newLinkedList
        this.tail=newLinkedList
        this.length=1
    }
    push(value){
        let newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
    this.tail.next=newNode
    
     this.tail=newNode
    }
    reverse(){
        if(!this.head){
            return;
        }
        let temp=this.head
        this.head=this.tail
        this.tail=temp
        let next=temp
        let prev=null
   for(let i=0;i<this.length;i++){
    next=temp.next
    temp.next=prev
           
            prev=temp
            temp=next
         
        }
    }
   
} 
// next=temp.next
// temp.next=prev
// prev=temp
// temp=next
const myLinkedList=new LinkedList(45)
myLinkedList.push(65)
myLinkedList.push(56)
console.log(myLinkedList)
myLinkedList.reverse()
console.log(myLinkedList)

