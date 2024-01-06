var txtop = document.getElementById('opcao')
var esc = document.getElementById('res')

function enviar() {
    var op = Number.parseInt(txtop.value)
    
    switch (op) {
        case 1:
            var txtn1 = window.prompt("Digite um valor: ")
            var txtn2 = window.prompt("Digite outro valor: ")
            var n1 = Number(txtn1)
            var n2 = Number(txtn2)
            var s = n1 + n2
            esc.innerHTML = `A soma entre ${n1} + ${n2} é igual a : <strong>${s}</strong>`
        break

        case 2:
            var txtn1 = window.prompt("Digite um valor: ")
            var txtn2 = window.prompt("Digite outro valor: ")
            var n1 = Number(txtn1)
            var n2 = Number(txtn2)
            var s = n1 * n2
            esc.innerHTML = `A soma entre ${n1} x ${n2} é igual a : <strong>${s}</strong>`
        break

        case 3:
            var txtn1 = window.prompt("Digite um número: ")
            var n1 = Number(txtn1)
            if (n1 % 2 == 0) {
                esc.innerHTML = `O número ${n1} é PAR`
            } else {
                esc.innerHTML = `O número ${n1} é ÍMPAR`
            }
        break

        case 4:
            var data = new Date()
            var at = data.getFullYear()
            var txtan = window.prompt("Digite o ano que você nasceu: ")
            var an = Number(txtan)
            if (an >= at || an < 1900) {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            } else {
                var idade = at - an
                esc.innerHTML = `Em ${at} você terá: <strong>${idade} anos</strong>`
            }
        break
    }
}