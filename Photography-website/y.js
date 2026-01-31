let userName1 = 'Maureen'
console.log (userName1)
let userAge = '28'
console.log (userAge)
let isLoggedIn = 'true'
console.log (isLoggedIn)
let selectedCourse = null
console.log (selectedCourse)
const m = [1,'hello',true]
let fruits = ['apples','mangoes','passion']
fruits.unshift('banana')
fruits.shift('banana')
console.log (fruits)
console.log (fruits[1])
console.log(fruits.length)

fruits.sort()
console.log(fruits)

for(let a = 0; a<fruits.length; a++){
    console.log(fruits[a])
}

let user = {name:'Ruth', age:23, hobby:'cooking', girl:true}
console.log(user.age)

console.log(Object.keys(user))
for(let k in user){
    console.log(k + ':' + user[k] )
}
let car = {brand:'toyota', color:'silver'}
let count = 0

let i = 5;
console.log(i++)
console.log(i)
let r = 10
console.log(r--)
console.log(r)

for(let b = 1; b < 10; b++){
    console.log(b)
}
let v = 5;
while (v>0){
console.log(v)
    v--
}

let attempts = 3;
let correctPassword = 'ggg1'
let userPasswords = '000'

while(attempts>0 && userPassword !== correctPassword){
    console.log(attempts)
}

let food = 250
while(food > 100){
    console.log('Keep eating')
    food--
}
let userPassword
do{
    password = '1234'
}while(password !== '1234')
console.log('Nope')
