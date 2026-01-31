let value=3
let negValue=-value
console.log(negValue)//-3

//console.log(2+2)-4
//console.log(2-2)-0
//console.log(2*2)-4
//console.log(2**2)-4
//console.log(2/3)-0.66
//console.log(2%3)-2

let str1="hello"
let str2="Maya"
let str3=str1+str2
console.log(str3)//hello Maya

console.log("1"+2)//12
console.log(1+"2")//12
console.log(1+2+"2")//32 here first addition happen after that it concatenate
console.log("1"+2+2)//122  because if something string written before compiler will understand all in that line is like string
console.log("2">1)//true but not good practice
console.log("02">1)//true but not good practice
//avoid this type of comparison writing in code
console.log(null>0)//false 
console.log(null==0)//false
console.log(null>=0)//true because equality operator and comparison operator works differently 
//comparison converts null to number ,as 0 that's why null>=0 is true and null>0 false.
//"==":checks value,"===":checks datatype also for comparison
