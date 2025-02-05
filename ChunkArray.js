
const chunkArray=(array,size)=>{
    let chunks=[]
  let  ind=0;
    while(ind<array.length){
        const chunk=array.slice(ind,ind+size)
        chunks.push(chunk)
        ind+=size
    }
    console.log(chunks)
    return chunks
}


chunkArray([1,9,6,3,2],3)
