var c=300
let a=300
if(true){
    let a =10
    const b=20
    //console.log("Inner: ",a)// this will print the value of a inside initialize in this scope 
    var d=70
}

//for(let i=0;i<array.length;i++){
  //  const element =array[i]
//}

console.log(a)
console.log(d)// var datatype always known for it accessibility outside of the scope 
//closure means child function can access variable of parent function
function one(){
    const username="shaanti"
    function two(){
        const website='youtube'
        console.log(username)
    }
    //console.log(website)// throw error because accessing out of the scope
    two()
}
//one()
/* 
if(true){
    const userName="Radhika"
    if(userName=="Radhika"){
        const website="youtube"
        console.log(userName+website);
    }
   // console.log(website); give error because website is out of the scope

}  */
//we can call function any where in the code it  will not htrow error
function addOne(num){
    return num+1
}
console.log(addOne(5))
//console.log(addTwo(4)) but we can't call variable before declaration
const addTwo=function(num){
    return num +2
}
console.log(addTwo(5))
//When an inner function remembers and uses outer function variables even after
//  the outer function ends, it is called a closure.
//Arrow function-using this keyword

