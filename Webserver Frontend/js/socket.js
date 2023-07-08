// Websocket
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected to server');
});

socket.addEventListener('message', (message) => {
  const { type, data } = JSON.parse(message.data);
  switch (type) {
    case 'parameters': return getGpsAndDepthValues(data);
    case 'parameters-from-server': return getParametersFromServer(data);
  }  
})

function postValues (values) {
  const payloadAsString = JSON.stringify({ type:'parameters-from-app', data:values });
  socket.send(payloadAsString);
}

function getGpsAndDepthValues (data) {
  const { gps, depth } = data;
  document.getElementById('gps-parameter').innerHTML = gps;
  document.getElementById('depth-parameter').innerHTML = depth;
}

function getParametersFromServer (data) {
  console.log('Paramters from server: ', data);
}