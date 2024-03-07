var txtalt = document.querySelector('input#ialtura')
var txtpeso = document.querySelector('input#ipeso')
var res = document.querySelector('div#res')
var magro = document.querySelector('tr.magro')
var normal = document.querySelector('tr.normal')
var sobrepeso = document.querySelector('tr.sobrepeso')
var obesidade = document.querySelector('tr.obesidade')
var obesidade_grave = document.querySelector('tr.obesidade_grave')

function calcular() {
    magro.style = 'background-color: rgba(240, 248, 255, 0);'
    normal.style = 'background-color: rgba(240, 248, 255, 0);'
    sobrepeso.style = 'background-color: rgba(240, 248, 255, 0);'
    obesidade.style = 'background-color: rgba(240, 248, 255, 0);'
    obesidade_grave.style = 'background-color: rgba(240, 248, 255, 0);'
    res.innerHTML = ''
    let alt = Number(txtalt.value)
    let peso = Number(txtpeso.value)
    let imc0 = peso / alt
    let imc = imc0 / alt
    if (txtalt.value.length == 0 || txtpeso.value.length == 0) {
        window.alert('[ERRO] Digite um valor')
    } else {
        res.innerHTML = imc.toFixed(2)
        if (imc < 18.5) {
            magro.style = 'background-color: #004bfac2;'
        } else if (imc < 25) {
            normal.style = 'background-color: #004bfac2'
        } else if (imc < 30) {
            sobrepeso.style = 'background-color: #004bfac2'
        } else if (imc < 40) {
            obesidade.style = 'background-color: #004bfac2'
        } else if (imc >= 40) {
            obesidade_grave.style = 'background-color: #004bfac2'
        }
    }

}