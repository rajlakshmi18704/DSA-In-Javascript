let str="Apple"
let arr = str.split("");
for(let i=0;i<arr.length/2;i++){
const temp=arr[i]
arr[i]=arr[arr.length-1-i]
arr[arr.length-i-1]=temp

}
str = arr.join(""); 
console.log(str)
