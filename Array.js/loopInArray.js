//FOR OF loop(applied on array, map but not can't applied on object)
//loop in array of number
const arr=[5,2,7,8,5,9]
for(const num of arr){
   // console.log(num)//give directly array value not index
}
//loop in string
const greetings="Hello World!"
for(const greet of greetings){
    if(greet == " "){
        continue
    }
   // console.log(`Each char is ${greet}`)
}

//MAP
const map=new Map()
map.set('IN','India')
map.set('B','Brazil')
//console.log(map)
//iterating over the map
for(const key of map){
   // console.log(key)
}
for(const [key,value] of map){
//console.log(key,':-',value)
}

//FOR IN
//used specially for object 
// not iterable on map
//give index value on array if apply
const myObject={
    js:"javascript",
    r:"ruby",
    sw:"swift",
   cpp:"c++"
}
for (const key in myObject){
   // console.log(key)//print only key value
//console.log(myObject[key] )//print value of key
}
for(const val in arr){
   // console.log(arr[val])//give value of each index
   // console.log(val)//give index value
}

// FOR EACH LOOP

const coding=["js","ruby","zuby","cpp"]
coding.forEach((name)=>{ //coding.forEach(function (name){
            // console.log(name)// console.log(name)   })
    
})
function printMe(item){
    //console.log(item)
}
coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr)  //we can print three components of array
})
//
const my2=[{
    language:"java",
    langauageType:"OOPs&procedural",
},
{
    language:"c",
    langauageType:"procedural",
}]

my2.forEach((item)=>{
   // console.log(item.language)//give this property only
    //console.log(item)//whole array
})

const myNums=[1,2,3,4,45,6,7,8,9,10]
const wall=myNums.forEach((item)=>{
    //console.log(item);print value
    return item
})
//console.log(wall)//print undefined because for each will return nothing
const newNums=myNums.filter((num)=>num>4)
//console.log(newNums)
const newNums1=myNums.filter((num)=>{//if you creating scope then oyu should write return keyword
    return num<4    //we can add condition in for Each if not using filter
})
console.log(newNums1)
//let userBooks=books.filter((bk) => bk.genre ==='History')
//userBooks=books.filter((bk)=>{return bk.publish>=2000})//using return keyword because,we wrote {}or started scope function