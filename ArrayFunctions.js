
//Two ways to create an array
//Array can store any dataTypes.
let arr=[4,5,6,9,12]
let arr2=new Array()
//push method
arr.push(65)
arr.pop()
//method to add an element in the beginning
arr.unshift(75)
//method to remove an element in the beginning
arr.shift()
// console.log(arr)
//Looping an array
//1. for loop
//while loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
//Inbuilt array methods
// mapfunction returns a new array with the required changed in the old array
//if we dont return anything ,it will return undefined
// const mappedArray=arr.map((val,ind,arr)=>{
// // console.log("hello")
//     // return val+5
// })


// console.log(mappedArray)
//filter method
// this method only let in that value which satisfies 
// the CSSConditionRule.it creates new array keeping the values which have passed the condition
// const filteredvalue=arr.filter((val)=> val>5)
// console.log(filteredvalue)
// some method
// return true if any of the element passes that condtion
//  const someArray=arr.some((val)=>val>37)
//  console.log(someArray)

// .reduce() iterates through the array and accumulates a single value.
// The first prev value is the initialValue (if provided), else it takes the first element of the array.
// Each iteration returns a new accumulated value, which becomes prev for the next iteration.
//  const reduceArray=arr.reduce((prev,val)=>{
//     console.log("  val  " +val+ " prev " +prev)
// return val+prev
//  },2)
//  console.log(reduceArray)
//spread operartor=...
let num1=[4,6,8,9]
let num2=[6,8,56,33]

let finalsum=[num1,num2]
//In this case nested array will be created
//for putting all these elements in single array we use spread operator like this.
finalsum=[...num1,...num2]
// console.log(finalsum)
//rest operator syntax is same as spread operator syntax
function sum(...numbers){

    return numbers;
}
// // const ressum=sum(num1,num2,"hello")
// console.log(ressum)
//concat
// const newArray=num1.concat(num2)
//slice method returns the copy
//  of the array with ithe
//  inclusive of the first index provided and exclusive of 
// the second index. slice method can also take negative index
// const newArray=num1.slice(0,2)
// console.log(newArray)
// console.log(num1.slice(-1))

//splice()-makes changes to original array
// num1.splice(1,2,"orange")
// console.log(num1)
//fil method can take one or two parameters if we 
//provide one value it will fill the whole array with that value
//if we provide two value then it will from the index that we have provided.
const dummyArray=[2,5,6,8]
dummyArray.fill(6,3)
console.log(dummyArray)
//findIndex-it return the first index where it finds the value otherwise, returns  -1
 const found=num1.findIndex((item)=>item==8)
 console.log(found)