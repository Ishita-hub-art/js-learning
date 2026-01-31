const name="Ishi"
const repoCount=100
//old version syntax : don't use it
console.log(name+" "+repoCount+" " +"Star")
//newer version : use this 
console.log(`Hii uni I am ${name} and my repositiory count is ${repoCount}`)

const gen= new String('kontenshik')
console.log(gen[0]);//k
console.log(gen.toUpperCase())//KONTENSHIK
console.log(gen.charAt(3))//t
console.log(gen.indexOf('k'))//0 because first ocuurence will return
console.log(gen.substring(0,4))
console.log(gen.slice(-9,5))//formula:length+start
console.log(gen.substr(4,10))//include both end(start,length)
const newString ="  hii  "
console.log(newString.trim())// remove both side whitespaces, it has two more method trimEnd() and trimStart()
const url ="https://rosy.com/rosy%20chaudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))//false
const no="hii,bii,cii,kii"
console.log(no.split(','))//split the whole string into array based on given character and symbol
