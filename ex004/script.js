function enviar() {
    var a = document.getElementsByName('a')[0]
    var b = document.getElementsByName('b')[0]
    var msg = document.getElementById('msg')
    var tabuada = document.getElementById('tabuada')

    var a1 = Number(a.value)
    var b1 = Number(b.value)

    var soma = a1+b1
    var sub= a1-b1
    var mult= a1*b1
    var div=a1/b1
    

    switch (Number(tabuada.value)) {
        case 1:
        msg.innerHTML= (`A soma de ${a1} mais ${b1} é igual a ${soma}`)
            break;

        case 2:
        msg.innerHTML = (`A subtração de ${a1} menos ${b1} é igual a ${sub}`)
        break;

        case 3:
            msg.innerHTML = (`A multiplicação de ${a1} vezes ${b1} é igual a ${mult}`)
            break;

        case 4:
            msg.innerHTML = (`A divisão de ${a1} divido ${b1} é igual a ${div}`)
            break;
        default:
            break;
    }
}