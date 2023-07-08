// Modules
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app)
const WebSocketServer = require('ws');

// Controllers
const { getGpsAndDepthValues, handleMessages } = require('./controllers');

// Vars
const port = 8080;
const staticPath = path.join(__dirname, './public');

// Configs
app.use(express.static(staticPath));
const wss = new WebSocketServer.Server({ server });

wss.on('connection', (ws) => {

  ws.on('open', () => console.log('Client connected'));
  ws.on('close', () => console.log('Client disconnected'));

  // Receive
  ws.on('message', (message) => handleMessages(message, ws));

  // Send
  setInterval(() => ws.send(getGpsAndDepthValues()), 1000);

});

server.listen(port, () => console.log(`Listening on port ${port}`));
