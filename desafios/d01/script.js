function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hr = data.getHours()
    msg.innerHTML = `Agora são ${hr} horas`

    if (hr > 4 && hr < 12){
        img.src = 'modelos/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hr >= 12 && hr <= 18){
        img.src = 'modelos/tarde.png'
        document.body.style.background = 'darkorange'
    } else {
        img.src = 'modelos/noite.png'
        document.body.style.background = '#515154'
    }
}
