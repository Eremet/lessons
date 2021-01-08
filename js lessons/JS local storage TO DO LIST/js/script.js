let tasks = []
let imgDone = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>'
let imgCorrect = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
let imgTrash = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>'
let output = document.getElementById('output')

addTodo=()=>{
    let input = document.getElementById('inputText')
    if(input !== ''){
        const todo = {
            id: tasks.length+1,
            name: input.value,
            completed:false
        }
        tasks.push(todo)
        addToLocalStorage()
        input.value=''
    }
}
renderToDos=()=>{
    output.innerHTML=''
    tasks.forEach(el=>{
        let card = document.createElement('div')
        let h = document.createElement('h3')
        let btns = document.createElement('div')
        let done = document.createElement('button')
        let correct = document.createElement('button')
        let trash = document.createElement('button')
        card.classList = el.completed ? 'card active' : 'card'
        h.innerHTML=el.name
        btns.classList='btns'
        done.innerHTML=imgDone
        correct.innerHTML=imgCorrect
        trash.innerHTML=imgTrash
        card.appendChild(h)
        btns.appendChild(done)
        done.style.display = el.completed ? 'none' : 'block'
        btns.appendChild(correct)
        btns.appendChild(trash)
        card.appendChild(btns)
        output.appendChild(card)

        let id = el.id
        done.addEventListener('click', () =>{
            tasks.forEach(el=>{
                if(el.id==id){
                    el.completed = !el.completed
                }
            })
             addToLocalStorage()
        })
        correct.addEventListener('click', () =>{
            let cor = prompt('Введите предложение!')
            tasks.forEach(el =>{
                if(el.id == id){
                    let p = confirm ('Действительно-ли вы хотите заменить запись?')
                    if(p == true){
                        el.name = cor
                    }else{

                    }
                }else{

                }
                addToLocalStorage()
            });
        })        
        trash.addEventListener('click', (e)=>{
            e.preventDefault
            let con = confirm('Действительно-ли вы хотите удалить запись?')
            if(con){
                tasks = tasks.filter(el=>{
                    return el.id != id
                })
            }
            addToLocalStorage()
        })
    })
}
addToLocalStorage=()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderToDos()
}
getFromLocalStorage=()=>{
    const reference = localStorage.getItem('tasks')
    if(reference){
        tasks=JSON.parse(reference)
        renderToDos()
    }
}
getFromLocalStorage()

// let h = document.getElementById('name')
// let strg = localStorage.getItem('forH1') 
// if( strg == '' || strg == null || strg == undefined){
//     h.innerHTML = 'javascript'
// }else{
//     h.innerHTML = strg
// }

// change=()=>{
//     let input = document.getElementById('inputText')
//     localStorage.setItem('forH1', input.value)
//     let lcstrg = localStorage.getItem('forH1')
//     h.innerHTML = lcstrg
// }
