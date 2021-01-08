// let a = 5
// if(a < 5){
//     alert('Мало')
// }else if(a === 5){
//     alert('В точку')
// }else if(a > 5){
//     alert('Много')
// }else{
//     alert('Что-то пошло не так')
// }


// a<5 ? alert('Мало') : 
// a === 5 ? alert('В точку') : 
// a > 5 ? ('Много') : 
// alert('Что-то пошло не так')

// let num = 15 // 10
// switch (num) {
//     case 5:
//         alert('Мало')
//         break;
//     case 10:
//         alert('В точку')
//         break;
//     case 15:
//         alert('Много')
//         break;
//     default:
//         alert('Что-то пошло не так')
//         break;
            
//     }


// let arr = ['asd"s"d', 1224, "234'234'm", 1.5, false, 0, null, undefined]
// console.log(arr)

// // for(let i in arr){
// //     console.log(arr[i])
// // }

// // for(let i = 0; i<arr.length; i++){
// //     console.log(arr[i])
// // }

// arr.map(element=>{
//     console.log(element)
// })
// arr.forEach(eremet=>{
//     console.log(eremet)

// sayHello=(name, age)=>{
//     alert('Hello my friend'+' '+name +' '+age)
// }

// setTimeout(sayHello, 3000, "John", 17)


let timer = setInterval(() => {
    console.log("tik tak")
}, 2000);

setTimeout(() => {
   clearInterval(timer) 
   alert('stop')
}, 10000);