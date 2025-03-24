class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
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
            return
        }
        
        this.tail.next=newNode
        this.tail=newNode
        this.length++
        
    }
    pop(){
        if(!this.head){
            return;
        }
        let temp=this.head
        
        let prev=null
        while(temp.next){
            prev=temp
            temp=temp.next
        }
        prev.next=null
        this.tail=prev
        this.length--;
    }
    shift(){
        if(!this.head){
            return
        }
        if(this.length==1){
            this.head=null
            temp.next=null
            this.tail=null
            this.length--
            return
        }
        let temp=this.head
        this.head=temp.next
        temp.next=null;
        // console.log(temp)
      
        
        this.length--;
    }
    unshift(value){
        const newNode=new Node(value)

        if(!this.head){
this.head=newNode
this.tail=newNode
        }
        let temp=this.head
        this.head=newNode
        newNode.next=temp;
        this.length++
    }
    getNodeByIndex(ind){
        if(!this.head){
            return;
        }
        let count=0
        let temp=this.head
        while(temp){
            if(ind==count){
                return temp.value
            }
            temp=temp.next
            count++;
        }
      
    }
    InsertAtIndex(value,ind){
        if(!this.head){
            unshift(value)
return;
        }
        let newNode=new Node(value)
        let count=0
        let temp=this.head
       let prev=this.head
        while(temp)
        {
            if(count==ind)
            {
newNode.next=temp
prev.next=newNode
this.length++;
return;
            }
            prev=temp
            temp=temp.next
            
        }

    }
}
let MyLinkedList=new LinkedList(77)
MyLinkedList.push(88)
MyLinkedList.push(18)
MyLinkedList.push(68)
console.log(MyLinkedList)
// MyLinkedList.pop()
// MyLinkedList.shift()
// MyLinkedList.unshift(29)
MyLinkedList.InsertAtIndex(34,1)
//   console.log(MyLinkedList.getNodeByIndex(2)) 
console.log(MyLinkedList)