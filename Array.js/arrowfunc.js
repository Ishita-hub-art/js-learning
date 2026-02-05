//this inside arrow function(=>)
    const cha1=()=>{
        let user3="geet"
        console.log(this)//pritn empty object
        console.log(this.user3)//print undefined
    }
//cha1()
//console.log(cha1)
// const addTwo=(num1,num2)=>{
//     return num1+num2//and this expilicitly return
// } 
// console.log(addTwo(4,5))

//const addTwo=(num1,num2)=> num1+num2//here only one statement is present that's why no need to write return
//and this is called implicitly return, without writing retrun keyword 
const addTwo=(num1,num2)=> (num1+num2)//if we write return statement in bracket without it will also work
//console.log(addTwo(8,9))
const add3=(num1,num2)=>({username:"shailey"})
//console.log(add3(4,5))


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// (function pure() {
//     console.log("DB connected");
// })();
//console.log("Before IIFE");
(function pure() {
  console.log("THIS IS NAMED IIFE");
})();
//console.log("After IIFE");

( () => {
    console.log(`THIS IS NORMAL IIFE`)
})();

( (name) => {
    console.log(`${name} parameter is passed in IIFE and it is normal IIFE`)
}) ('Rosy')


