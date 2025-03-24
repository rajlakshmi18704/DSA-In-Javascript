class Node{
    constructor(value){
        this.head=value,
        this.next=null
    }
}
class LinkedList{
constructor(value){
    this.head=new Node(value)
    this.tail=this.head
    this.length=1
}
push(value){
    const newNode=new Node(value)
   if(!this.head){
   
    this.head=newNode
    this.tail=newNode
    this.length++
   }
  
 this.tail.next=newNode
this.tail=newNode
this.length++;
 }

 pop(){
    if(!this.head){
        return null
    }
    if(this.length===0){
        this.head=null;
        this.tail=null

    }
    let temp=this.head
    let prev=null
    while(temp.next){
    prev=temp
    temp=prev.next
    }
    this.tail=prev
    this.tail.next=null;
    this.length--;
    return temp;

}
unshift(value){
    const newNode=new Node(value)
    if(!this.head){
        this.head=newNode
        this.tail=newNode
        return this;
    }
    newNode.next=this.head
    this.head=newNode

    this.length++
}
shift(){
    if(!this.head){
        return;
    }
    if(this.length==0){
        this.head=null
        
    }
    let temp=this.head
    this.head=this.head.next
    temp.next=null
    

    this.length--
    return temp;
}
getFirst(){
if(!this.head){
    return
}
 return this.head
}
getLast(){
    let temp=this.head
    while(temp.next!==null){
       temp=temp.next
    }
 
    return temp;
}
get(value){
    if(!this.head){
        return;
       

    }
    let temp=this.head
    let i=0;
    while(temp!=null){
    //    console.log(temp.head)
      if(temp.head==value){
        // console.log(temp )
        // console.log("The value is at",temp)
        console.log("node is at index i:",i)
        return i;

      }  
      temp=temp.next
      i=i+1
    }
  
    return temp;
}
}


const myLinkedList=new LinkedList(45)

myLinkedList.push(87)
myLinkedList.push(45)
myLinkedList.push(95)
myLinkedList.push(49)
// myLinkedList.unshift(56)
// console.log(myLinkedList)
// myLinkedList.pop()
myLinkedList.shift()
// console.log(myLinkedList)
console.log(myLinkedList.get(45))