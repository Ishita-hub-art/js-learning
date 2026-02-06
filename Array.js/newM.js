const myNumbers=[1,4,5,6,7,10,8,3]
// const newNums=myNumbers.map((num) =>num+10)
// console.log(newNums)

const newNums1=myNumbers
.map((num)=>num*10)
.map((num) => num+1)
.filter((num) => num>= 40)
//console.log(newNums1);



//+++++++++ reduce method +++++++++++
const array1=[1,2,3,4]

const sum=array1.reduce(function (acc,cuuVal){
    console.log(`${acc}`)
    return acc+cuuVal
},0)
const total=array1.reduce((acc,cuuVal)=>acc+cuuVal,0)
console.log(sum)
console.log(total)
const shopingCart=[{
    itemName:"js course",
    price:299
},
{
    itemName:"java course",
    price:380,
}]
 
const priceToPay=shopingCart.reduce((acc,item)=>acc+item.price ,0)
console.log(priceToPay)