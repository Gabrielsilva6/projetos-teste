document.getElementById('resultado').innerHTML = ''
function insert(num){
    document.getElementById('resultado').innerHTML += num
}

function clean() {
    var esc = document.getElementById('resultado')
    esc.innerHTML = ''
}

function back() {
    var res = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = res.substring(0 , res.length -1)
}

function result() {
    var res = document.getElementById('resultado').innerHTML
    if (res.length >= 1) {
        document.getElementById('resultado').innerHTML = eval(res)
    } else {
        window.alert('[ERRO]Nada para somar!')
    }
}