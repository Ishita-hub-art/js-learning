const score=400
console.log(score)//400

const balance=new Number(100.22)
console.log(balance)//[Number:100] because it show that you specify it as number
console.log(balance.toString())//100
console.log(balance.toString().length)//3
console.log(balance.toFixed(1));//give fixed value after after point if not written give(.0).

const newNo=123.8966
console.log(newNo.toPrecision(2))//give precision value till defined value even if given value is decimal or not
const hundred=1000000
console.log(hundred.toLocaleString('en-In'))//for representing value in any countries standard form of number
//inside engine of javasscript define many type of method for number like max, min,etc.

//****************  MATH *******************//
//Math library libraries built-in method
console.log(Math)//object
console.log(Math.abs(-4));//convert negative value into positive only -4=4
console.log(Math.round(4.4));//4.0 to 4.4 =4 and 4.5 to 4.9 =5
console.log(Math.ceil(4.2));//top value 5
console.log(Math.floor(4.9));//low value 4
console.log(Math.min(4,67,2,42,8));//2
console.log(Math.max(8,4,87,98,972));//972

console.log(Math.random())//write floating number between 0(inclusive) to 10(exclusive)like 0.1,0.2 etc.
console.log((Math.random()*10) + 1);//it give you value greater than 0.

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min +1) + min))


