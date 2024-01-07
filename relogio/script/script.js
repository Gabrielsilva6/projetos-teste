const hora = document.getElementById('hora')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()
    
    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (seg < 10) seg = '0' + seg

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;
  })
