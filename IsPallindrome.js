let str="abba"

let count=0
for(let i=0;i<str.length/2;i++){

if(str.charAt(i)!=str.charAt(str.length-1-i)){
    // console.log(str.charAt(i))
    
console.log("Not  Pallindrome")

break
}

else{
    count=count+1 
    break
}


}
if(count>0){
    console.log("Pallindrome")
}


// else{
//     console.log(" a pallindrome")
// }



