//whenever want to execute some code repeatedly by calling it we will do with the help of function
//syntax:-function(keyword) nameoffunction(){write what to execute} //it is like package of something when do you want to execute by calling you will execute it.
function say(){
    console.log("h")
    console.log("i")
    console.log("i")
}
//say()//execute function
say//represent the function reference
/*
function addTwo(number1,number2){
  //  console.log(number1+number2);
//}
//addTwo(3,8)//this is printing value because we wrote print function in function initialization

function addThree(number1,number2){
    number1+number2;
}
addThree(7,1)//this will print undefined because funtion does not returning anything in it
*/
function addTwo(number1,number2){
return number1+number2
}
let result=addTwo(5,6)
//console.log(result)
/*
function loginUserMessage(username){
    return `${username} just looged in`
}
//console.log(loginUserMessage("ani"))
//console.log(loginUserMessage())//print undefined
*/
function loginUser(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just looged in`
}
//loginUser("lucy")  execute but not print
//console.log(loginUser())//execute but print undefined
//console.log(loginUser("lucy"))
//default value passing in constructor of function
function login(userName="ruby"){
    return `${userName} is default username.`
}
//console.log(login())
/*
function calculateCartPrice(num1){//print only one value
    return num1
}
console.log(calculateCartPrice(200,400,600))  
*/
function calculateCartPrice(...num1){
    return num1;//print all element of data in as array
}
//console.log(calculateCartPrice(89,7,123,90));
function calculation(val1,val2,...num2){
    return num2;//in this example val1-90,val2-45 and rest value belong to num2
}
//console.log(calculation(90,45,32,12,90,764,56))
/*
//PASSING OBJECT IN FUNCTION
const user={
    username:" aadi",
    price:67
}
function handleobject(anyObject){
console.log(`Username of object is${anyObject.username} and price is${anyObject.price}`)
}
handleobject(user)//passing object to function

//passing an array to function
const meArr=[200,600,40]
function handleArr(newArr){
return meArr
}
//console.log(handleArr(meArr))
*/
//################## THIS KEYWORD #####################
//this is used for cuurent context
const user1={
    username1:"me",
    price:999,
    
    message :function(){
      //console.log(`${this.username1}, welcome to website`);
        console.log(this);//print nothing written inside object
      
    }
}
//user1.message()
//console.log(user1.username1)
//user1.username1="samy"
user1//only calling object refernce doesn't print
//console.log(this) here this is empty object ({})-like this | but in console this represent as window object
//inside console window is global object and in node engine empty is global object
function chai(){
    let username="heet"
    console.log(this)//this will print some method which are built in
console.log(this.username)//inside function this keyword doesn't work as it work inside object for current contexting
}
//chai()


