// Se invoca cuando se oprime el botón Enviar
function enviarTexto(event){
  event.preventDefault();
  var campo = event.target.texto;
  // Enviamos el valor del campo al servidor
  doSend(campo.value);
  // Vaciamos el campo
  campo.value="";
}

// La función init se ejecuta cuando termina de cargarse la página
function init() {
  // Conexión con el servidor de websocket
  wsConnect();
}

// Invoca esta función para conectar con el servidor de WebSocket
function wsConnect() {
  // Connect to WebSocket server
  websocket = new WebSocket("ws://localhost:5000");

  // Asignación de callbacks
  websocket.onopen = function (evt) {
      onOpen(evt)
  };
  websocket.onclose = function (evt) {
      onClose(evt)
  };
  websocket.onmessage = function (evt) {
      onMessage(evt)
  };
  websocket.onerror = function (evt) {
      onError(evt)
  };
}

// Se ejecuta cuando se establece la conexión Websocket con el servidor
function onOpen(evt) {
  // Habilitamos el botón Enviar
  document.getElementById("rango").disabled = false;
  document.getElementById("myCheck").disabled = false;
  // Enviamos el saludo inicial al servidor
  doSend("Conexión Exitosa");
}

// Se ejecuta cuando la conexión con el servidor se cierra
function onClose(evt) {

  // Deshabilitamos el boton
  document.getElementById("rango").disabled = true;
  document.getElementById("myCheck").disabled = true;

  // Intenta reconectarse cada 2 segundos
  setTimeout(function () {
      wsConnect()
  }, 2000);
}


// Se invoca cuando se presenta un error en el WebSocket
function onError(evt) {
  console.log("ERROR: " + evt.data);
}

// Envía un mensaje al servidor (y se imprime en la consola)
function doSend(message) {
  console.log("Enviando: " + message);
  websocket.send(JSON.stringify({"message": message}));
}

// Se invoca la función init cuando la página termina de cargarse
window.addEventListener("load", init, false);