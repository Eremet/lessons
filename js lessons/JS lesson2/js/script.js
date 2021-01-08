/*
let number = 5

if(number==5){
    alert('Равно')
}else{
    alert('Не равно')
}

let year = prompt("В каком году был опубликована спецификация ES-2015?")

if(year == 2015) {
    alert('Правильный ответ')
    alert("Ты молодец")
}else alert('Не правильный ответ')

if(year > 2015){
    alert("Это слишком много")
}else if(year < 2015){
    alert("Маловато")
}else{
    alert('В точку')
}

if(year == 2015){
    alert('Истина')
}
else if(year == 2014){
    alert('Еще один не правильный ответ')
}
else if(year == 2020){
    alert('Вычти пятерку')
}
else if(year == 2010){
    alert('Почти, добавь пятерку')
}
else{
    alert('Интересный год')
}

let i = '10'

//if (i > 10) alert('Оно больше')
//if (i >= 10) alert('Оно больше илил равно')
//if (i < 10) alert('Оно меньше')
//if (i <= 10) alert('Оно меньше или равно')
//if (i != 10) alert('Оно не ровняется 10')

if (i === 10){
    alert('ok')
}else{
    alert('что то пошло не так')
}

// = присваивание
// ==  поверхностное сравнение на схожести
// === строгоя проверка (тип данных)


let accessAlowed
let age = prompt('How are you?')

if(age >=  18){
    accessAlowed = true
}else{
    accessAlowed = false
}
alert(accessAlowed)


let age = prompt('How old are you?')
let accessAlowed = (age >= 18) ? true : false
alert(accessAlowed)

let age = prompt('Возраст')
let message = (age < 5) ? 'Приветик ребенок' : 
              (age < 18)? 'Привет' :
              (age <100)? 'Здравствуйте' :
              'Необычный возраст'

alert(message)

let num = 10
let sNum = 5
if(num === 10 && sNum === 10){  // && знак И
    alert('они равны')
}
else if(num === 10 || sNum === 5){ // || знак ИЛИ
    alert('true')
}
else{
    alert('Что то пошло не так')
}


let result
let num1 = Number(prompt('what is firts number'))
let operant = prompt('what is operant')
let num2 = Number(prompt('what is second number'))
if (operant == "*"){
    result = num1 * num2 
}
else if(operant == "/"){
    result = num1 / num2
}
else if(operant = "+"){
    result = num1 + num2
}
else if(operant == "-"){
    result = num1 - num2
}
alert(result) 

let calc = prompt('введите пример')
alert(eval(calc))


let answer
let quest = prompt('Какого цвета вода? \n1) Белая 2) Зеленая 3) Голубая')
if(quest == 'Белая'){
    answer = Не
}
else if(quest == 'Зеленая'){
    answer = Ха, ха, ха
}
else if(quest == 'Голубая'){
    answer = Молодец
}
alert(answer)*/

/* 1st question*/
let quest = prompt('Какого цвета вода? \n 1) Череная 2) Голубая 3) Черная')
if (quest == "Черная" || quest == "1" || quest == "3" || quest == "Черная"){
    alert('Не верно') 
}
else if(quest == "2" || quest == "Голубая"){
    alert('Верно')
}
else{
    alert('Ты че дурак что ли???')    
}
/* 2nd question*/
 quest = prompt('Кто призидент России? \n 1) Путин 2) Медведев 3) Соке')
if (quest == "Путин" || quest == "1"){
    alert('Верно') 
}
else if(quest == "Медведев" || quest == "2" || quest == "Соке" || quest == "3"){
    alert('Не верно')
}
else{
    alert('Ты че дурак что ли???')    
}
/* 3rd question*/
quest = prompt('Сколько сезонов года в Кыргызстане? \n 1) Четыре 2) Два 3) Один')
if (quest == "Два" || quest == "2" || quest == "Один" || quest == "3"){
    alert('Не верно') 
}
else if(quest == "Один" || quest == "1"){
    alert(' Верно')
}
else{
    alert('Ты че дурак что ли???')    
}
/* 4th question*/
quest = prompt('Самая большая страна? \n 1) Канада 2) Россия 3) Казахстан')
if (quest == "Канада" || quest == "1" || quest == "3" || quest == "Казахстан"){
    alert('Не верно') 
}
else if(quest == "2" || quest == "Россия"){
    alert('Верно')
}
else{
    alert('Ты че дурак что ли???')    
}
/* 5th question*/
quest = prompt('Как называется столица Казахстана? \n 1) Алмата 2) Астана 3) Нурсултан')
if (quest == "Черная" || quest == "1"){
    alert('Не верно') 
}
else if(quest == "3" || quest == "Черная"){
    alert('Верно')    
}
else{
    alert('Ты че дурак что ли???')    
}
