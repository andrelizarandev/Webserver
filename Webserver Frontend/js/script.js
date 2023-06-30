window.addEventListener('DOMContentLoaded', (event) => {
    // Obtener la dirección IP utilizando una solicitud a un servicio externo
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
            // Mostrar la dirección IP en el elemento con el id "ip"
            document.getElementById('ip').textContent = data.ip;
        })
        .catch(error => {
            console.log(error);
            document.getElementById('ip').textContent = 'No se pudo obtener la dirección IP.';
        });
});
