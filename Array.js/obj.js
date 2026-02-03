//by two ways we can declare object 1.)literal and 2.)constructor 
//when object made by constructor one instance is created and i.e. called singleton(such as Object.create)
//when object made by literal multiple instances created ({})
//syntax for object creation using literal
const mySym=Symbol("key1")//declaration of symbol 
const JsUser={
    name:"Ram",
    age:56,
    [mySym]:"mykey1",//Symbol datatype can't directly declare in object first declare outside object
    //writing []-not compulsory but value of key treat as key without[],if write like this []then it will treat as symbol
    location:"Jaipur",
    isLoggedIn:false,
    "fullName":"RajaRam",
    lastLoginDays:["Monday","Saturday"]
}
//ACCESS METHOD(basically(.)dot present in between object name and variable name)
//1st-method
JsUser.age//if written without "" in object declaration as above
JsUser["fullName"]//if written with ""in object declaration as above
JsUser["name"]//we can access by this method also if in object declaration key written without "".
console.log(JsUser[mySym])//accessing of symbol datatype from object

JsUser.age="89"//it will replace value in object with current one
//Object.freeze(JsUser.User)//it will help to make object immutable

JsUser.greeting=function(){// function in javascript treated as a variable
    console.log("Hello JS user");
}
JsUser.greeting1=function(){
    console.log(`Hello JS use,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());


