// function getAlert () {
//     return 'Hello world'
// }

// alert(getAlert())
// console.log(getAlert())

// //*************

// function getStr(){
//     alert('hello my friend')
//     console.log('hello my friend')
// }

// getStr()

// //*************

// function sum(a, b, c){
//     return a+b+c
// }

// alert(sum(7, 3, 5))

// //*************

// function sumOfConsole(a, b, c){
//     console.log(a, b, c)
// }

// sumOfConsole(7, 10, 40)

// //*************

// checkAge=(a)=>{
//     if(a > 18){
//         return true
//     }else{
//         return false
//     }
    
// } 
// let age = prompt('Сколько вам лет?')
// if(checkAge(age)){
//     alert('Allowed')
// }else{
//     alert('Not allowed')
// }

// //*************

// function maximum(a, b, c){
//     if(a > b && a > c) return a
//     else if(b > c && b > a) return b
//     else return c
// }
// alert(maximum(7, 9, 1))

// //*************

// maximum = (a, b) =>{
//     return a > b ? a : b
// }

// //*************

// pow=(x, n)=>{
//     let result = x
//     for(let i=1; i<n; i++){
//         result *= x
//     }
//     return result
// }

// let x = prompt('x')
// let n = prompt('n')

// if(n<1){
//     alert('n в отрицательном значении')
// }else{
//     alert(pow(x, n))
// }

// //*************

// pow=(x, n)=>{
//     return x**n
// }

// let x = prompt('x')
// let n = prompt('n')

// if(n<1){
//     alert('n в отрицательном значении')
// }else{
//     alert(pow(x, n))
// }

// //*************

// let names = prompt('Введите имена гостей')
// function invite(){
//     return 'Саламатсызбы урматуу ' + names + ' сиздер тойго чакырылдыныз!'
// }
// alert(invite())

// //*************

// let arr = []
// let countGuests = Number(prompt('Кол-во гостей'))
// for(let i = 0; i<=countGuests; i++){
//     let nameGuest = prompt('Имя гостя №')
//     arr.push(nameGuest)
// }

// getPresent=(name)=>{
//     return 'Уважаемый' +name+ ', я приглашаю вас на день рождения!!!'
// }
// for(let i=0; i<arr.length; i++){
//     alert(getPresent(arr[i]))
// }
