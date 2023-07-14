// WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Values
const parametersInput = document.getElementById('parameters-values');

ws.addEventListener('open', (event) => {
  console.log('Connected to server');
});

setInterval(() => sendInputValues(), 15000);

function sendInputValues () {
  const values = getRandomValues();
  const currentValues = parametersInput.value;
  parametersInput.value = ` ${values}\n${currentValues}`
  const payloadAsString = JSON.stringify({ type:'parameters-from-app-server', data:values });
  ws.send(payloadAsString);
}

function getRandomValues () {
  return `${getPotentialValue()}, ${getSensibilityValue()}, ${getDepthValue()}, ${getMinimumDistanceValue()}, ${getAcusticValue()}, ${getOffsetValue()}, ${getPulsesValue()}, ${getTVGValue()}, ${getDepthValueForChart()}`
}

function getPotentialValue () {
  return Math.floor(Math.random() * 10);
}

function getSensibilityValue () {
  return Math.floor(Math.random() * 10);
}

function getDepthValue () {
  const items = [ 20, 100, 200, 400 ];
  return items[Math.floor(Math.random() * items.length)];
}

function getMinimumDistanceValue () {
  const items = [ 0, 1, 2, 3 ];
  return items[Math.floor(Math.random() * items.length)];
}

function getAcusticValue () {
  return Math.floor((Math.random() * 10))
}

function getOffsetValue () {
  return Math.floor((Math.random() * 10))
}

function getPulsesValue () {
  const items = [ 1, 2, 3 ];
  return items[Math.floor(Math.random() * items.length)];
}

function getTVGValue () {
  const items = [ 10, 20, 30, 40 ];
  return items[Math.floor(Math.random() * items.length)];
}

function getDepthValueForChart () {
  return Math.floor(Math.random() * 400);
}