//falsy value:-
//false, 0, -0, bigInt 0n, ""(empty string), null, undefined, NaN(Not a Number)
//truthy value:
//[](empty array),"0",'false'(because inside string),{}(empty object),function(){}-(empty function)," "(space string)
const userEmail=[]
if(userEmail.length === 0){//checks for array is empty or not
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length === 0){//check for empty object
    console.log("Object is empty");
}

//NULLISH CAELESCING OPERATOR(??): work on NULL & dEFINED
let val1;// this operator used for checking error if by any chance any null value come in database 
// and another given value come then which value will be taken by engine
//val1=5 ?? 10 - retrun 5
//val1=null ?? 10 - print 10
//val1=undefined ?? 15 - retrun 15
//val1=null ?? 10 ?? 20 - retrun 10

//TERNARY OPERATOR
//SYNTAX:: CONDITION ? TRUE : FALSE
const icePrice=200;
icePrice >=180 ? console.log("more than 180"):console.log("less than 180")
