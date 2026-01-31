let m = 7

let fruits = ['mango','banana','orange','strawberries']
for (let f = 0; f < 10; f++){
      console.log(f)
}

let lives = 3
while (lives < 0){
    console.log('life lost')
    lives++
}
let tryagain = 1
do {
    console.log('play')
    tryagain ++
}while (tryagain = false)

let instruments =  ['guitar','drums','flutes']
for(let z of instruments){
    console.log(z)
}

for(let z in instruments){
    console.log(z)
}

function add(a,b){
    return a+b
}
console.log(add(3, 8))

function pizza(topping1, topping2){

}
pizza ('mushroom','beef')

setTimeout (function(){
      console.log('hey every 2 seconds')
})
function greetings(m){
    return function(n){
      console.log(m + ' ' + n)
    }
}
const t = greetings('Hello')
const y = greetings('Bonjour')
y('Moh')

function multiply(a){
    return function(b){
        a + b
    }
}
const p = multiply(5)
console.log(p(5))

function w(...v){
    return v.reduce((acc, c) =>acc + c, 0)
}
//console.log(w(1, 2, 3, 4, 6, 10))

//(function(greeting){
    let greet = 'Bonjour'
    let name = "James"
    console.log(greet +' ' + name)
//})()

//let word = 'hello my name is J'
   //console.log(word.toUpperCase())
   //console.log(word.toLowerCase().trim().replace('J','Moh'))
   //console.log(word.charAt(10))
   // console.log(word.indexOf('J'))
   // console.log(word.includes('my'))






   