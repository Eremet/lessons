const API = 'https://randomuser.me/api/?results=1'

let btn = document.createElement('button')
document.body.appendChild(btn)

btn.addEventListener('click', ()=>{
    search()
})



search = async () =>{
    let resp = await fetch(API)
    let data = await resp.json()
    console.log(data.results[0])  
    data= data.results[0]
    let div = document.createElement('div')

    div.id = 'card'
    document.body.appendChild(div)
    let img = document.createElement('img')
    let text1 = document.createElement('h2')
    let text2 = document.createElement('h2')
    let text = document.createElement('div')
    text.id = 'text'
    let lock = document.createElement('p')
    lock.id = 'location'
    let email = document.createElement('p')
    email.id = 'email'
    let phone = document.createElement('p')
    phone.id = 'phone'

    img.src = data.picture.large
    text1.innerHTML = data.name.first
    text2.innerHTML = data.name.last
    lock.innerHTML = data.location.city
    email.innerHTML = data.email
    phone.innerHTML = data.phone

    card.appendChild(img)
    card.appendChild(text1)
    card.appendChild(text2)

    text.appendChild(lock)
    text.appendChild(email)
    text.appendChild(phone)

    card.appendChild(text)
    
}

