let myDate = new Date()
console.log(myDate)
//DATE STAMP
//let myCreateDate=new Date(2026,0,2) /print accordingly universal time
//let myCreatedDate=new Date()//it will print today date
let myCreatedDate=new Date(2026,1,2)//Y/M/D/Time
console.log(myCreatedDate.toString())

let newDate = new Date("01-2-2026")
console.log(newDate)

let myTimeStamp=Date.now()
console.log(myCreatedDate.getTime())
let currentDate= new Date()
console.log(currentDate.getMonth()+1)//give month in integer, we add 1 beacause injavascript counting start from 0
console.log(currentDate.toLocaleString('default'))

