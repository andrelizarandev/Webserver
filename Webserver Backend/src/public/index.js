// WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Values
const depthValue = document.getElementById('depth-input');

function getParametersFromServer () {
  return { depth: depthValue.value }
}

ws.addEventListener('open', (event) => {
  console.log('Connected to server');
});

function sendInputValues () {
  const payloadAsString = JSON.stringify({ type:'parameters-from-app-server', data:getParametersFromServer() });
  ws.send(payloadAsString);
}