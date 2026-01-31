let user = {name:'Ken' , age: 27 ,hobby: 'cooking'}
console.log(user)
for(let k in user){
    console.log(k + ':' + user[k])
}
for (b=5; b<0; b--) {
      console.log(b)
}

let x = 200
while(x<=600){
    console.log('Keep farming')
    x++
}

let burgers = 100;
do {
    console.log('Keep ordering')
    burgers--
}while(burgers < 25)

let word = 'Hello world'
for(let y of word){
    console.log(y)
}
let fruits = ['mango','orange','apple']
for(let t of fruits){
    console.log(t)
}
const add = (a, b) => (a + b)
console.log(add(4 , 6))

let myKeys = false
let myPhone = true
console.log(!myKeys && myPhone)

let sunny = false
if(sunny){
    console.log('Go for swimming')
}else{
    console.log('Read a book')
}

let results = 83
if (results>= 80){
    console.log('A')
}else if (results >= 75){
    console.log('A-')
}else if (results >= 70){
    console.log('B+')
}else{
    console.log('B')
}

let age = 17
let vote = age >= 18 ? 'Vote': 'No'
console.log(vote)

let grade = 76
let final = grade >= 80 ? 'A' : 'B'
console.log(final)

(function greet(){
    let salute = 'Hello'
    let name = 'Daph'
    console.log(salute + name)
})()