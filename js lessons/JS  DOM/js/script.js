// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// let h = document.getElementById('hello')
// // h.classList='root'
// h.setAttribute('class', 'root')
// console.log(h)
// console.log('****************')
// let div = document.getElementsByClassName('block')
// console.log(div)

// let redDiv = document.getElementById('cube')
// var left = 0
// var mtop = 0
// var rotate = 0
// setInterval(() => {
//     redDiv.style.transform='rotate('+rotate+'deg)'
//     if(left == 0 && mtop <= 550 && mtop > 0){
//         mtop = mtop - 10
//         redDiv.style.top=mtop+'px'
//     }
//     else if(left <= 650 && mtop == 550){
//         left = left - 10
//         redDiv.style.left=left+'px'
//     }
//     else if(mtop >= 0 && mtop <= 540 && left >= 640){
//         redDiv.style.top=mtop+'px'
//         mtop = mtop + 10
//     }
//     else if(left >= 0 && mtop == 0 && left <= 640){
//         redDiv.style.left=left+'px'
//         left = left + 10
//     }
//     rotate+=15
// }, 30);

let arr = []
addToArray=()=>{
    let inputText = document.getElementById('text').value
    arr.push(inputText)
    console.log(arr)
    let div = document.getElementById('output')
    div.innerHTML=''
    arr.forEach(el=>{
        let h = document.createElement('h1')
        h.innerHTML=el
        div.appendChild(h)
    })
}
