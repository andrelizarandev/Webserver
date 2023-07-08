// Websocket
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected to server');
});

socket.addEventListener('message', (message) => {
  const { type, data } = JSON.parse(message.data);
  switch (type) {
    case 'parameters': return getParameters(data);
  }  
})

function postValues (values) {
  const valuesAsString = JSON.stringify(values);
  socket.send(valuesAsString);
}

function getParameters (data) {
  const { gps, depth } = data;
  document.getElementById('gps-parameter').innerHTML = gps;
  document.getElementById('depth-parameter').innerHTML = depth;
}