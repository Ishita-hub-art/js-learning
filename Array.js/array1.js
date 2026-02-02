//syntax of array declaration and initialization
const myArr=[0,1,2,3,"Fgh"]//|1st method| resizable,collection of different datatypes,0-based indexing,access by index
/*
const arr=new Array(1,2,3,4) //2nd method of initialization of aaray
console.log(arr[1])

//ARRAY METHOD
arr.push(5)//for adding element into the stack
console.log(arr)
myArr.push(8)
console.log(myArr)
myArr.pop()//remove last value from array
console.log(myArr)
myArr.unshift(10)//add element at starting of the array
console.log(myArr)
myArr.shift()//remove element from starting of an array

console.log(myArr)
console.log(myArr.indexOf(3))
const newArr=myArr.join()//convert array into string by seperating all element with comma
console.log(newArr)//0,1,2,3,Fgh

//SLICE, SPLICE

const myn1=myArr.slice(1,4)//remove given element range from array include start but exclude last
//but not manipulate original array
console.log(myn1)
console.log("A "+myArr)
const myn2=myArr.splice(2,4)//remove given element range from array incluse from both side
console.log("B "+myArr)//but manipulate original array
*/

const marvel_heros=["thor","Ironman","spiderMan"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)//push all element of dc array to marvel array and that pushed array || push in same array
//console.log(marvel_heros)//act as a single element but we Have write indexing in such order to access them like a 2d array

const all=marvel_heros.concat(dc_heros)//concate all elemnt from both in new array
const allHeros=[...marvel_heros,...dc_heros]//(...)-this is spread operator worked same as concatenation but 
//we can add more than two array in spread operator but in concatenate only two is allowed 

const anarr=[1,2,3,[5,2,6,4],8,[4,[5,6]]]
//console.log(anarr.flat(Infinity))//provide a simple flat array of multiple array
Array.isArray("Kamakhya")//give boolean value for given is array or not
Array.from("Kamakhya")//convert string into  string array
Array.from({name:Radha})//give empty array because we didn't define I want array of key or value
let score1=809
let score2=896
let score3=908
Array.of(score1,score2,score3)//Array.of()used for making of multiple variable
