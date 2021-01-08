let key = "vMzRkHwOCkh2yLz9kXYRVKc3no8QFYZB"

let api = "http://api.giphy.com/v1/gifs/search?q="

let secondStr = '&api_key='+key
// search=()=>{
//     
//     alert(a)
// }

// fetch(url).then(resp=>resp.json()).then(data=>{
//     console.log(data)
// })
search=async()=>{
    let a = document.getElementById('a')
    let url = api+a.value+secondStr+'&limit=20'
    let resp = await fetch(url)
    let data = await resp.json()
    let arr = data.data
    console.log(arr)
    let div = document.getElementById('output')
    div.innerHTML=''
    a.value = ''
    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src=el.embed_url
        div.appendChild(ifrm).style.cssText = 'border: none;';
    });
}