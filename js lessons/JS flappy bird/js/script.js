var cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')

//Создание картинок
var bird = document.getElementById('bird')
var bg = document.getElementById('bg')
var fg = document.getElementById('fg')
var pipeUp = document.getElementById('pipeUp')
var pipeBottom = document.getElementById('pipeBottom')

//Пути картинок
// bird.src = 'img/bird.png'
// bg.src = 'img/bg.png'
// fg.src = 'img/fg.png'
// pipeUp.src = 'img/pipeUp.png'
// pipeBottom.src = 'img/pipeBottom.png'


document.addEventListener('keypress', moveUp)
function moveUp(){
    yPos -= 20
}
//создание блоков
var pipe = []
pipe[0]={
    x: cvs.width,
    y: 0
}
var otstup = 80
var score = 0
//Позиция птички
var xPos = 10
var yPos = 150
var grav = 1.5
function draw (){
    ctx.drawImage(bg, 0, 0)
    for(var i = 0; i<pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + otstup)

        pipe[i].x --

        if(pipe[i].x == 100){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }
        //отслеживание прикосновений
        if(xPos + bird.width>=pipe[i].x &&
            xPos<=pipe[i].x + pipeUp.width &&
            (yPos<=pipe[i].y + pipeUp.height ||
                yPos + bird.height>= pipe[i].y + pipeUp.height + otstup) ||
                yPos + bird.height>=cvs.height - fg.height
            ){
                // location.reload()
            }

            if(pipe[i].x == 5){
                score++
            }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height)
    ctx.drawImage(bird, xPos, yPos)

    yPos += grav

    ctx.fillStyle = "#000"
    ctx.font = '24px Verdana'
    ctx.fillText('Счет: ' +score, 10, cvs.height-20)
    requestAnimationFrame(draw)
}

pipeBottom.onload = draw