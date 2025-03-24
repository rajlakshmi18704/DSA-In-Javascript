// let array=[618,34,21,18,18,18,17]
// let largest=array[0]
// let slargest=-1
// // for(let i=0;i<array.length;i++){
//     if(array[i]>largest){
//         largest=array[i]
//     }
// }
// for(let i=array.length-1;i>=0;i--){
//   if(array[i]!=largest && array[i]>largest){
// slargest=array[i]
// console.log(slargest)
//   }

// }
// console.log(slargest)
//Brute Approach



//optimised approach

let array=[618,34,21,18,18,18,17]
let largest=array[0]
let slargest=-1
for(let i=0;i<array.length;i++){
    if(array[i]>largest ){
        slargest=largest
        largest=array[i]
    }
    else if(array[i]<largest && array[i]>slargest){
        slargest=array[i]
    }
}
console.log(slargest)