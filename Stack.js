class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Stack{
    constructor(value){
        const newNode=new Node(value) 
        this.first=newNode
    
        this.length=1
    }
    push(value){
        const newNode=new Node(value)
        if(!this.first){
            this.first=newNode
        }

newNode.next=this.first
this.first=newNode   
this.length++;     
return this;
    }
    pop(){
        if(!this.first){
            return
        }
        if(this.length==1){
            this.first=null
        
            this.length--;
            return;
        }
    let temp=this.first

        this.first=this.first.next
        temp.next=null
        this.length--
return temp;
    }
    }
    const myStack=new Stack(45)
    myStack.push(54)
    myStack.push(34)
    myStack.push(64)
    console.log(myStack)
    myStack.pop()
    console.log(myStack)
   
