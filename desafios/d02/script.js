function verificar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('img')

    var ano = document.querySelector('input#inasc')
    var nacs = Number(ano.value)
    
    var data = new Date()
    var anoAtual = data.getFullYear()

    if (ano.value.length == 0 || ano.value > anoAtual) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = anoAtual - Number(ano.value)
        var genero = ''
        var img1 = document.createElement('img')
        img1.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                // Criança
                // img1.setAttribute('src', 'foto-bebe-masculino.png')
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                /// Criança
            } else if (idade >= 10 && idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        msg.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        // img1.appendChild(img1)
    }
}