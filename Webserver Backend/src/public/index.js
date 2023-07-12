// WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Values
const parametersValues = document.getElementById('parameters-values');

ws.addEventListener('open', (event) => {
  console.log('Connected to server');
});

function sendInputValues () {
  const values = parametersValues.value;
  if (!validateParametersValues(values)) return alert('Valores no válidos');
  const payloadAsString = JSON.stringify({ type:'parameters-from-app-server', data:values });
  ws.send(payloadAsString);
}

function validateParametersValues (value = "") {
  const values = value.split(', ');
  const filteredValues = values.filter((value) => {
    const valueAsNumber = Number(value);
    return (isNaN(valueAsNumber));
  });
  return filteredValues.length === 0 && values.length === 9;
}