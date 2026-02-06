const score=200
if(score>100){
    //var power="fly"// var has global scope so it will assign value out of this function also.
    let power="grow"
  //  console.log(`User power:${power}`);
}
//console.log(`Use power:${power}`)

const balance =1000
//if(balance>500) console.log("test1")//short hand notation, but good for only one statement not more than that
//nested if else
let userLoggedIn=true
let debitCard=false
if(userLoggedIn && debitCard){
    console.log("Allow to withdraw")
} else if(userLoggedIn || debitCard){
   // console.log("Enter conrrect login credential")
}else{
    console.log("skldkdj")
}

//++++++++++++++ switch statement ++++++++++++++++


const month=5;
switch(month){
    case 1: 
    console.log(2);
    break;
    case 2:
        console.log(4)
    break;
    case 3://defined value written with case
        console.log("march") //without break after matching key all value going to print
    break;
    case 4:
        console.log(april)
    break;
    default:
       // console.log("Enter correct month")
}
/*
COMPARISON OPERATOR :-
<,>,>=,<=,==(CHECKS VALUE),===(CHECKS FOR DATATYPE),!==
*/

//**************** LOOP STATEMENT ***************//
for(let index=1; index<=20;index++){
   
    if(index==5){
        //console.log("5 detected");
    }
    if(index==8){
        //break;//help in exiting from whole loop
        continue;
    }
     //console.log(index);
}

//WHILE LOOP 
 let index=0
while(index<=10){
  // console.log(index) 
   index++
}
//while loop in array
const myArray2=[5,8,98,3,4,1];
let arr=0;
while(arr!=myArray2.length-1){
//console.log(`Value of myArray2 is ${myArray2[arr]}`)
arr++
}
//do-while loop
let score1=11
do{
    console.log(`your score value is ${score1}`);
    score1++
}while(score1<=17){
console.log(`score value is ${score1}`)
}