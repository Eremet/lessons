const API = 'https://api.github.com/users/'

let rt = document.createElement('div')
rt.id = 'root'
document.body.appendChild(rt)
let input = document.createElement('input')
let btnSearch = document.createElement('button')
btnSearch.innerHTML='search'

rt.appendChild(input)
rt.appendChild(btnSearch)

btnSearch.addEventListener('click', ()=>{
    findUser(input.value)    
})

let card = document.createElement('div')
findUser = async (name) =>{
    let resp = await fetch(API + name)
    let data = await resp.json()
    input.value = ''
    card.innerHTML = ''
    //создание html элементов

    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let b = document.createElement('b')
    let p = document.createElement('p')
    let h4 = document.createElement('h4')
    let followers = document.createElement('span')
    let following = document.createElement('span')
    let br = document.createElement('br')
    let button = document.createElement('button')

    //добавление состовляющих для наших элементов
    card.classList = 'card' //добавление класса для div
    img.src = data.avatar_url //добавление пути для img
    h3.innerHTML = data.name //add name   
    b.innerHTML = data.location //add location
    p.innerHTML = data.bio //add bio
    h4.innerHTML = "Кол-во репозиториев: "+ data.public_repos
    followers.innerHTML = "Кол-по подписчиков: "+ data.followers
    following.innerHTML = "Кол-во подписок: "+ data.following
    button.innerHTML = 'LINK GIT'
    // добавление переменных(элементов) в карточку
    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(b)
    card.appendChild(p)
    card.appendChild(h4)
    card.appendChild(followers)
    card.appendChild(following)
    card.appendChild(br)
    card.appendChild(button)

    // добаление всех карточек в div_root
    rt.appendChild(card)

    button.addEventListener('click', ()=>{
        window.location.href = data.html_url
    })
}
