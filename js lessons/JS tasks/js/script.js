// let d, rus, eng, count, question, points, repeat


// d={
//     apple: 'яблоко'
// }
// alert('Добавь слово в словарь а после пройди тест')
// count = Number(prompt('кол-во'))

// for(let i = 0; i<count; i++){
//     eng=prompt('Введи слово на английском')
//     rus=prompt('Введи слово на русском')
//     d[eng]=rus
// }

// alert('Давай поиграем')

// for(let key in d){
//     console.log(key)
//     question = prompt('Переведи слово ' + key + ' на русский язык!')
//     if(question = d[key]){
//     alert('Правильно!')
//     points++
//     }else{
//         alert('Не прваильно')
//     }
// }

// repeat = prompt("ТЫ прошел тест на " + points + "вопросво верно. Хочешь пройти еще раз?")
// if(repeat = 'да'){
//     continue
// }

//************

// let question, a=1, b=10
// let rand = Math.floor(Math.random()*(b-a+1))
// console.log(rand)
// question = prompt('Угадай число от 1 до 10!')
// if(question == rand){
//     alert('Правильно')
// }else{
//     alert('Не верно')
// }

//************

// var rand
// function randomInteger(min, max) {
//     rand = Math.floor(Math.random()*(max - min+1))
//     return rand;
// }
// console.log(randomInteger(1, 10))

//     for(let i = 3; i>=1; i--){
//         let question = +prompt('Угадай число от 1 до 10! у тебя есть еще ' +i + 'попыток')
//         if(question == rand){
//             alert('Правильно')
//             break
//         }else{
//             alert('Не правильно!')
//             continue
//         }        
//     }

// let rand = Math.floor(Math.random() * 10)
// console.log(rand)
// for(let lefe = 2;life>=1; life--){
//     let question = prompt('Ввели число которое я задумал! У тебя ' + life + ' попытки')
//     question == rand ?
//     (alert('Ты угадал'), life=0) :
//     alert('Ты не угадал у тебя ' + life + ' попытки!')
// }

// let timer = setInterval(() => {
//     for(let i = 1; i<=100; i++){
//         console.log(i)
//     }    
// }, 1000);
// // console.log(i)
// setTimeout(() => {
//     clearInterval(timer) 
//     console.log('stop')
//  }, 10000);




// let from = +prompt('Введи число от')
// let to = +prompt('Введи число до')
// printNumbers=(from,to)=>{
//     let current = from
//     let timer = setInterval(()=>{
//         if(current = to) clearInterval(timer)
//         current++
//     }, 1000)
// }
// printNumbers(from, to)


// let d = [
//     {
//     name:'Adam',
//     age: 21,
//     telephone: "+996-555-555-555",
//     status: 'student'
// },
// {
//     name:'Baha',
//     age: 20,
//     telephone: "+996-666-666-666",
//     status: 'student'
// },
// {
//     name:'Eremet',
//     age: 17,
//     telephone: "+996-000-000-000",
//     status: 'student'
// },
// {
//     name:'0murbek',
//     age: 20,
//     telephone: "+996-996-996-996",
//     status: 'student'
// },
// {
//     name:'Batyrbek',
//     age: 17,
//     telephone: "+996-123-123-123",
//     status: 'student'
// },
// ]
// d.forEach(el=>{
//     console.log(el)
//     console.log('Имя ' + el.name)
//     console.log('Возраст ' + el.age)
//     console.log('Номер ' + el.telephone)
//     console.log('Статус ' + el.status)
// //     console.log("****************")
// // })

//**********

// let a = +prompt('Введите высоту')
// let b = +prompt('Введите длину')
// let perimeter = (a+b)*2
// let area = a*b
// function getPerimeter(a, b) {
//     alert(perimeter)
// }
// function getArea(a, b) {
//     alert(area)
// }
// getArea(a, b)
// getPerimeter(a, b)

//**********

let a = +prompt('Введите высоту')
let b = +prompt('Введите длину')
getPerimeter=(a,b)=>{
    return (a+b)*2
}
getArea=(a,b)=>{
    return a*b
}
alert('Площадь '+getArea(a,b) + ' Периметр ' +getPerimeter(a,b))
