let dictionary = {
    apple:'яблоко',
    table:'стол',
    box:'каробка'
}
let point = 0
let dictLen = Object.keys(dictionary).length
let arrK = []
let arrV = []
let i = 0
addWords=()=>{
    let eng = document.getElementById('engWord')
    let rus = document.getElementById('rusWord')
    let engWord = eng.value
    let rusWord = rus.value
    dictionary[engWord] = rusWord
    eng.value = ''
    rus.value = ''
    alert('Слово добавлено!')
}

let testModel = document.getElementById('testModel')
test=()=>{
    testModel.style.display='flex'
    point = 0
    dictLen = Object.keys(dictionary).length
    i = 0
    
    for(let key in dictionary){
        arrK.push(key)
        arrV.push(dictionary[key])
    }
    addPoint()
    addQuestion()
}
hideTest=()=>{
    testModel.style.display='none'
}
// функционал для теста



addPoint=()=>{
    let p = document.getElementById('points')
    p.innerHTML=point+' / '+dictLen
}

addQuestion=()=>{
    let question = document.getElementById('question')
    question.innerHTML=arrK[i]
}
check=()=>{
    let answer = document.getElementById('answer')
    if(answer.value == arrV[i]){
        alert('Правельный ответ!')
        i++
        point++
        addQuestion()
        addPoint()
    }else{
        alert('Неправельный ответ!')
        i++
        addQuestion()
    }
    if(dictLen == i){
        alert('Твой результат ' + point + ' из ' + dictLen)
        i=0
        point=0
        addQuestion()
        addPoint()

    }
    answer.value = ''
}