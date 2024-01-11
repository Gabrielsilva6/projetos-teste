var resultado = document.getElementById("resultado")
//Função para inserir selecionado 
function insert(mostrar) {
/*
    var res = document.getElementById("resultado")
    const regexSinais = new RegExp(/[\+\-\*\/\.]$/)
    const ultimoCaractereSinal = regexSinais.test(resultado.value)
    const valorDigitadoSinal = regexSinais.test(mostrar)

    if (ultimoCaractereSinal || valorDigitadoSinal) {
        if (resultado.value == "*") {
          resultado.value = ""
        }
        resultado.value += mostrar
        resultado.innerHTML = mostrar
    }
    */

    if (resultado.innerHTML == '*') {
        resultado.innerHTML = ''
    } else {
        resultado.innerHTML += mostrar
    }
}
//Função para limpar a caixa
function limpar() {
    resultado.innerHTML = ''
}
//Função para apagar o último dígito
function back() {
    var res = document.getElementById('resultado').innerHTML
    resultado.innerHTML = res.substring(0 , res.length -1)
}
//Função para calcular os dados
function calcular() {
    var res = document.getElementById('resultado').innerHTML
    if (res.length >= 1) {
        resultado.innerHTML = eval(res)
    } else {
        window.alert('[ERRO] Nada para calcular!')
    }
}