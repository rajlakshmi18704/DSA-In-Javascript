let arr=[3,6,2,9,5,1,4]
let k=3
//expected output=[9,5,1,4,3,6,2] ---->left rotate
//[[5,1,4,3,6,2,9]
// this is left rotation
// let arr1=arr.slice(0,k)
// let arr2=arr.slice(k,arr.length)
// console.log(arr)
// console.log(arr1)
// console.log(arr2)
// const newArray=[...arr2,...arr1]
// console.log(newArray)
//this is right rotation 
arr.reverse()
console.log(arr)
let raar1=arr.slice(0,k)
let raar2=arr.slice(k,arr.length).reverse()
raar1.reverse()
let rnewarr=[...raar1,...raar2]
console.log(raar1)
console.log(arr)
console.log(rnewarr)