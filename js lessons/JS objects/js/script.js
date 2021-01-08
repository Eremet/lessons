// let obj = {
//     name:"John",
//     surname:"Klark",
//     age:"63",
//     "reading books":['Гари потер', 'Токийские легенды', 'Война и мир'],
//     student: false,
// }

// console.log(obj) // вывод всего обьекта
// console.log(obj["reading books"])
// console.log(obj.name)

// delete obj.age // удаление по ключу

// console.log(obj) // вывод всего обьекта

// obj.name = 'MR.' // перезапись значение по ключу
// console.log(obj)

// obj["conviction"] = true // добавление в обьект
// console.log(obj)

// // let some = prompt('Что ты хочешь узнать?') // поиск в обьекте

// // console.log=(obj[some]) 

// for (let key in obj){
//     console.log(key)
//     console.log(obj[key])
// }

//**************

// function summarise(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum;
// } 
  

// let salaries = {
//     Adam: 360,
//     Klark: 370,
//     Leon: 410
// }
// console.log( summarise(salaries));

//**************

// let d = {
//     apple: 'Яблоко'
// }

// let eng = prompt('Введите английское слово')
// let rus = prompt('Введите русское слово')

// console.log(d)

//**************

// let question
// let count = 0
// for(let key in d){
//     if(key = d[key]){
//         count = count + 1
//         alert('Правильный ответ! + 1 балл')
//     }else{
//         alert('Неверный ответ!')
//     }
// }
// if(count = countWords){
//     alert('Поздравляем вы прошли тест, У вас на счету ' + count + ' баллов')
// }

//**************

// let d = {}
// let countWords = Number(prompt('Кол-во слов'))
// for(let i = 1; i == countWords; i++){
//     let eng = prompt('Введите английское слово')
//     let rus = prompt('Введите русское слово')
//     d[eng] = rus
// }
// console.log(d)

// let game 
// for(let key in d){
//     if (key == d.key){
//         true
//     }
//     prompt('Давай поиграем в игру!'+'\n'+'Переведи слово' + key) 
// }

//**************

test=()=>{
let d = {}
let countWords = Number(prompt('Кол-во слов'))
for(let i = 1; i <= countWords; i++){
    let eng = prompt('Введите английское слово')
    let rus = prompt('Введите русское слово')
    d[eng] = rus
}
console.log(d)
let game, count = 0
for(let key in d){
    game = prompt('Давай поиграем в игру!'+'\n'+`Переведи слово "${key}"`)
    if (game == d[key]) alert('Правильно!'), count++
    else alert('Не прваильно!')
}
alert(`Поздравляем вы прошли тест, Ваш счет '${count}' `)
let restart = confirm('Хотите пройти тест еще раз?')
    if(restart == true) test()
    return;
}
test()

//**************

// let object = {}
// let howWord = Number(prompt('Кол-во слов'))
// let value = howWord
//     for (let i = 1; i <= value; i++){
//         eng = prompt("Введите английское слово")
//         rus = prompt("Ведите его перевод на русский")
//         object[eng] = rus
// }
// console.log(object)
// let quation
// let count = 0
// for(let key in object){
//     if (key == object.key) {
//         true
//     }
//     count = count + 1
//     quation = prompt('Давай поиграем в игру!'+'\n'+'Переведи слово ' + key)//{

//     //     if{ 
//     //         alert('Поздравляем вы прошли тест, У вас на счету ' + count + ' балл')
//     //     }else{
//     //         alert('Поздравляем вы прошли тест, У вас на счету ' + count + ' баллов')
//     //     }        
//     // }
// }
// alert('Поздравляем вы прошли тест, У вас на счету ' + count + ' баллов')

