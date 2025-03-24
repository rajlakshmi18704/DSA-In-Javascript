class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class LinkedList{
    constructor(val){
const newNode=new Node(val)
this.head=newNode
this.tail=newNode
    }
    push(val){
        const newNode =new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return;
        }
        this.tail.next=newNode
        this.tail=newNode

        
    }
    printLinkedList(){
        if(!this.head){
            return;
        }
        if(this.head.length===1){
            console.log(this.head.val)
            
        }
        let temp=this.head
        while(this.head){
            console.log(this.head.val)
        this.head=this.head.next
        }
    }
    ReverseLinkedList(){
        // if(!this.head){
        //     return;
        // }
        // if(this.length===1){
        //     console.log(this.head.val)
            
        // }
        let temp=this.head
        this.head=this.tail
        this.tail=temp
        let next=temp;
        let prev=null;

       for(let i=0;i<this.length;i++){
        next=temp.next
        temp.next=prev
        prev=temp
        temp=next
       }
      
    }
}
const myLinkedList=new LinkedList(23)
myLinkedList.push(25)
myLinkedList.push(15)
myLinkedList.push(20)
myLinkedList.push(45)
console.log(myLinkedList)
// myLinkedList.printLinkedList()
myLinkedList.ReverseLinkedList()
// myLinkedList.printLinkedList()
console.log(myLinkedList)