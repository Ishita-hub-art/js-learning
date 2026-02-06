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
        console.log("Enter correct month")
}
/*
COMPARISON OPERATOR :-
<,>,>=,<=,==(CHECKS VALUE),===(CHECKS FOR DATATYPE),!==
*/
