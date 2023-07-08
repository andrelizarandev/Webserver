// Modules
const WebSocket = require('ws');

// Controllers
const { getGpsAndDepthValues, getParameters } = require('./controllers');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {

  ws.on('open', () => console.log('Client connected'));
  ws.on('close', () => console.log('Client disconnected'));

  // Receive
  ws.on('message', (message) => getParameters(message));

  // Send
  setInterval(() => ws.send(getGpsAndDepthValues()), 1000);

})
