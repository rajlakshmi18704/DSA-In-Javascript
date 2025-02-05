const prices=[7,1,5,3,6,4]
// const prices=[7,6,4,3,1]
let SellPrice=""
let sellPriceind=0
let BuyPrice=prices[0]
let BuyPriceind=0
for( let i=0;i<prices.length-1;i++){
    if(prices[i]< BuyPrice){
        BuyPrice=prices[i]
      BuyPriceind=i;
    }

}
for( let i=BuyPriceind;i<prices.length-1;i++){
    if(prices[i]>SellPrice){
      SellPrice=prices[i]
     sellPriceind=i;
    }

}
if(SellPrice===BuyPrice){
    console.log("No transaction is done since maxProfit is 0")
}
else{
    console.log("Max Profit is",SellPrice-BuyPrice)
    console.log("This is sell Price ",SellPrice)

    console.log("This is Buy Price ",BuyPrice)
}








// for(let j=BuyPriceind;j<prices.length-1;j++){
//     if(prices[j]<prices[j+1]){
//         SellPrice=prices[j+1]
// sellPriceind=j
//     }
//     console.log("Max Profit PriceInd",prices[j+1])
//     console.log("This is selling Price",j)
// 
