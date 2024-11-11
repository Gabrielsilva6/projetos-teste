document.getElementById('resultado').innerHTML = ''
function insert(num){
    document.getElementById('resultado').innerHTML += num
}

function clean() {
    var esc = document.getElementById('resultado')
    esc.innerHTML = ''
}

function result() {
    var res = document.getElementById('resultado').innerHTML
    if (res.length >= 1) {
        document.getElementById('resultado').innerHTML = eval(res)
    } else {
        window.alert('[ERRO]Nada para somar!')
    }
}