function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fano.ariaValueMax.lenght == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        window.alert(`Tudo Ok`)
    }
}
