let word=" helLlo wOrld"
 const wordarray=word.split(" ")
//  console.log(wordarray)
 let i=0
 const removeextraspace=word.trim("  ")
 while(i<wordarray.length){
 wordarray[i]=wordarray[i].toLowerCase()
   wordarray[i]= wordarray[i].charAt(0).toUpperCase() + wordarray[i].slice(1);
  
    i++;
    

 }
 word=wordarray.join(" ")

 console.log(word)
