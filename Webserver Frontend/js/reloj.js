const time = document.getElementById('time');
const date = document.getElementById('date');

const interval = setInterval (() => {

    const local = new Date();
    
    let dia = local.getDate(),
        mes = local.getMonth()+1,
        año = local.getFullYear();

        dia = ('0'+dia).slice(-2)
        mes = ('0'+mes).slice(-2)

        time.innerHTML = local.toLocaleTimeString();
        date.innerHTML = `${dia}/${mes}/${año}`;

}, 1000);