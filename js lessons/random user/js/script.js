const API  = 'https://randomuser.me/api/?results='

getUsers =async()=>{
    let num = document.getElementById('limitUsers')
    let numValue = num.value
    let resp = await fetch(API + numValue)
    let data = await resp.json()
    console.log(data.results)
    data = data.results
    num.value = ''
    let div = document.getElementById('output')
    div.innerHTML = ''
    data.forEach(element => {
        createCard(element, div)
    });
}
createCard=(element, output)=>{
    let card = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('h3')
    let phone = document.createElement('b')
    let email = document.createElement('b')
    let adres = document.createElement('p')
    let nationality = document.createElement('span')
    let gender = document.createElement('h3')

    img.src = element.picture.large
    name.innerHTML = 'Name is ' + element.name.title + ' ' + element.name.first + ' ' + element.name.last
    phone.innerHTML ='Phone is ' + element.phone
    email.innerHTML = ' Email is ' + element.email
    adres.innerHTML = 'Adress is '
                        +element.location.city +' '
                        +element.location.country +' '
                        +element.location.street.name +' '
                        +element.location.street.number
    nationality.innerHTML = 'Nationality is ' + element.nat
    gender.innerHTML = 'Gender: ' +element.gender
    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(phone)
    card.appendChild(email)
    card.appendChild(adres)
    card.appendChild(nationality)
    card.appendChild(gender)
    output.appendChild(card)
}