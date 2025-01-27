class customArray{
    constructor(){
        this.length=0;
        this.data={};
}
push(item){
    
        this.data[this.length]=item
       this.length++
return this.length
}
get(index){
this.data[index]
 return this.data[index]
}
pop(){
    const lastItem=this.data[this.length]
    delete this.data[this.length-1]
    this.length--
   return lastItem
}
// My approach
// shift(){
//     // const firstItem=this.data[0]
//     // console.log(firstItem)
    
   
//     for(let i=0;i<=this.length-2;i++){
      
//         const firstele=this.data[i]
//          this.data[i]=this.data[i+1]
//          this.data[i+1]=firstele
       
//     }

//learnt this method
shift(){
    const firseele=this.data[0]
   for(let i=0;i<=this.length-2;i++){
    
         const firstele=this.data[i]
     this.data[i]=this.data[i+1]
 
}
    delete this.data[this.length-1]
    this.length--
    return firseele
}

}
const newArray= new customArray()
newArray.push("apple")
newArray.push("grapes")
newArray.push("mango")
newArray.push("berries")
newArray.push("Rice")
console.log(newArray)
console.log("After shift")
newArray.shift()



// newArray.pop()
// newArray.pop()

console.log(newArray)
//Custom Array and methods