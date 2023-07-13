// WebSocket
const ws = new WebSocket('ws://localhost:8080');

// Values
const parametersValues = document.getElementById('parameters-values');

ws.addEventListener('open', (event) => {
  console.log('Connected to server');
});

setInterval(() => sendInputValues(false), 15000);

function sendInputValues (showAlert) {
  const values = parametersValues.value;
  if (!validateParametersValues(values)) return (showAlert) ? alert('Valores no válidos') : null;
  const payloadAsString = JSON.stringify({ type:'parameters-from-app-server', data:values });
  ws.send(payloadAsString);
}

function validateParametersValues (value = "") {
  const values = value.split(', ');
  const [ value1, value2, value3, value4, value5, value6, value7, value8, value9 ] = values;
  const result1 = validatePotentialValue(value1);
  const result2 = validateSensibilityValue(value2);
  const result3 = validateDepthValue(value3);
  const result4 = validateMinimumDistanceValue(value4);
  const result5 = validateAcusticProp(value5);
  const result6 = validateOffsetValue(value6);
  const result7 = validatePulsesValue(value7);
  const result8 = validateTVGValue(value8);
  const result9 = validateDepthForChart(value9);
  return values.length === 9 && result1 && result2 && result3 && result4 && result5 && result6 && result7 && result8 && result9;
}

function validatePotentialValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber >= 0 && valueAsNumber <= 10;
}

function validateSensibilityValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber >= 0 && valueAsNumber <= 100;
}

function validateDepthValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber === 20 || valueAsNumber === 100 || valueAsNumber === 200 || valueAsNumber === 400;
}

function validateAcusticProp (value) {
  const valueAsNumber = Number(value);
  return (!isNaN(valueAsNumber) && valueAsNumber >= 0 && valueAsNumber <= 10)
}

function validateOffsetValue (value) {
  const valueAsNumber = Number(value);
  return (!isNaN(valueAsNumber) && valueAsNumber >= 0 && valueAsNumber <= 10)
}

function validateMinimumDistanceValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber === 0 || valueAsNumber === 1 || valueAsNumber === 2 || valueAsNumber === 3;
}

function validatePulsesValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber === 1 || valueAsNumber === 2 || valueAsNumber === 3;
}

function validateTVGValue (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber === 10 || valueAsNumber === 20 || valueAsNumber === 30 || valueAsNumber === 40;
}

function validateDepthForChart (value) {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return false;
  return valueAsNumber >= 0 && valueAsNumber <= 200;
}