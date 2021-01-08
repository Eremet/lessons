// let arr = ['Adam', 'Baha', 123, 312.53 , 'false', ['Itc school'],]

// console.log(arr) //Вывод списка
// console.log(arr.length) //Длина списка

// arr.pop() //Удаление последнего
// console.log(arr)

// arr.shift() //Удаление первого
// console.log(arr)

// arr.push('Apple') //Добавить список
// console.log(arr)

// arr.unshift('First message') //Добавление в начало
// console.log(arr)

// // console.log(arr.indexOf(abc))
// let pos = arr.indexOf(false)
// arr.splice(pos, arr.length-pos)
// console.log(arr)

// let arr = ['qwerty', 123, ['asd', 0987]]
// console.log(arr[2] [0])

//*************** 

// let arr = ['qwerty', 123, true, 123.23, ['asd', 0987]]

// for(let i=0; i<arr.length; i++){
//     let elem = arr[i]

//     console.log(typeof(elem))

//     if(typeof(elem) == 'object') {
//         for(var a = 0; a<elem.length; a++){
//             console.log(elem[2])
//         }
//     }
// }

//*************** 

// let arr = []
// arr.push('qwerty', 123, '123')
// console.log(arr)

// let i = []

// for(let i=1; i<=100; i++){
//     console.log(i)
// }

//*************** 

// let arr, arr_f, arr_s
// arr = [] // all numbers
// arr_f = [] // % 2
// arr_s = [] // !% 2

// for(let i=0; i<=100; i++){
//     if(i % 2 == 0) arr_f.push(i)
//     else arr_s.push(i)
//     arr.push(i)
// }
// console.log(arr)
// console.log(arr_f)
// console.log(arr_f)
  
//*************** 

// let questions = ['Какого цвета трава?', 'Сколько пальцев на руке?']
// let variables = ['красная, желтая, зеленая, черная', '1, 3, 4, 5']
// let answer = ['зеленая', '5']
// let count = 0
// let sumOfUser = prompt('Выбери несгораемую сумму!')

// for(let i = 0; i<questions.length; i++){
//     let answ_quest = prompt(questions[i] +'\n'+ variables[i])
//     if(answ_quest == answer[i]){
//         count= count+100
//         alert('Правельный ответ! У вас на счету' + count)
//         continue

//     }else{
//         if(count>=sumOfUser){
//             alert('Вы проиграли и ваш выигрыш состовляет '+ count)
//         }else{
//             count = 0
//             alert('Вы проиграли и ваш выигрыш состовляет '+ count)
//         }
//         break
//     }
// } 
// if(count>sumOfUser){
//     alert('Вы победили и выиграли миллион!')
// }

//*************** 

// let str = prompt('Введите ваше слово');
// alert( str.split(''));


// let quest = prompt('Введите ваше слово!');
// let riverse = (quest.riverse)
//     if(arr = arr.reverse){
//     }
// alert('Ваше слово' + arr + 'является полиндромом!')

let str = prompt('введите слово')
// let arr = [] 
let strReverse = str.split('').reverse().join('');
if (strReverse == str) {
  alert('Ваше слово '+ str +' является полиндромом');
} else {
  alert('Ваше слово '+ str +' не является полиндромом');
}

// console.log(str)
// console.log(str.split(''))
// console.log(str.split('').reverse())
// console.log(str.split('').reverse().join(''))
// console.log(arr)


// for(let i = 0; i<str.length; i++){
//     arr.push(str[i])
// };
// for(let b=0; b<arr.length; b++){
//     if(arr[b] === arr.reverse()[b]){
//         console.log('полиндром')
//     }else{
//         console.log('не полиндром')
//         break
//     }
// }
// console.log(arr)