//SYNTAX OF OBJECT USING CONSTRUCTOR
//const tinderUser=new Object() //singleton object
const tinderUser={}//non-singleton object  no any internal difference
tinderUser.id="12345"
tinderUser.name="Samay"
tinderUser.isLoggedIn=false
//console.log(tinderUser)//{ id: '12345', name: 'Samay', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullName:{        //we will access object by dot notation
            firstName:"Raja",   //syntax=objectName.variableName inside object
            lastName:"Ram"
        }
    }
}
regularUser.fullname.userfullName.lastName//Ram
regularUser.fullname.userfullName.firstName//Raja
regularUser.fullname.userfullName//{userfullName:{firstName:Raja,lastName:Ram}}
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

obj4={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3={5:"t",6:"d"}//{}-we write braces for security.
const obj5=Object.entries({},obj1,obj2,obj3)//retrun all object element in new braces{}.
const obj6={...obj1,...obj2,...obj3}//another merthod for printing all object at a time.

//console.log(tinderUser);
Object.keys(tinderUser);//give key of object like this [ 'id', 'name', 'isLoggedIn' ]
Object.values(tinderUser);//give value of object
Object.entries(tinderUser)//print key-value of an object as an array.
tinderUser.hasOwnProperty('isLoggedIn')//give boolean value for properties present inside that object or not.
//from database object value come in form of array.
//Example:- 
/*
const users=[
{
    id:1,
    email:"a@gmail.com"
},                      //accessed using dot notation users[1].email,1 is id
{
    id:2,
    email:"c@gmail.com"
},
]
users[1].email//here right now not printing because database is not connected, it will print when we stored data in database and connect it.
*/
//OBJECT DESTRUCTURING
const course={
courseName:"js ",
price:99,
courseInstructor:"Robin"
}
course.price//print value of price
const {courseInstructor:Instruct}=course//another Method of printing value(syntax-const{propertiesname}=objectName)
//console.log(Instruct)
const {courseName}=course
console.log(courseName)

//API FORMAT IN JSON(JAVASCRIPT OBJECT NOTATION)
//TWO FROMAT -FIRST IN PURE OBJECT FORM IN BRACES
/*{
    "name": "idso",
    "coursenae"; "js",
   "price":45,
}
//Array of object
[
    {},
    {},
    {}
]
    */