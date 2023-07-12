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
  const { gps } = data;
  document.getElementById('gps-parameter').innerHTML = gps;
}

function getParametersFromServer (data) {
  console.log('Parameters from server: ', data);
  const valuesAsNumbers = data.split(', ');
  setValuesToHtmlElements(valuesAsNumbers);
}

function setValuesToHtmlElements (value = []) {
  const [ value1, value2, value3, value4, value5, value6, value7, value8, value9 ] = value;
  setPotentialRangeValue(value1);
  setSensibilityRangeValue(value2);
  setDepthRangeValue(value3);
  setMinimumDistanceValue(value4);
  setVelocityValue(value5);
  setOffsetValue(value6);
  setPulsesValue(value7);
  setTVGValue(value8);
  setDepthValues(value9);
  alert('Parámetros actualizados desde el servidor');
}

function setPotentialRangeValue (value) {
  document.getElementById('potential-range').value = value;
  document.getElementById('potential-value-text').innerHTML = value;
}

function setSensibilityRangeValue (value) {
  document.getElementById('sensibility-range').value = value;
  document.getElementById('sensibility-value-text').innerHTML = value;
}

function setDepthRangeValue (value) {
  switch (value) {
    case '20':  return document.getElementById('radio1').checked = true;
    case '100': return document.getElementById('radio2').checked = true;
    case '200': return document.getElementById('radio3').checked = true;
    case '400': return document.getElementById('radio4').checked = true;
  }
}

function setMinimumDistanceValue (value) {
  switch (value) {
    case '0': return document.getElementById('radio5').checked = true;
    case '1': return document.getElementById('radio6').checked = true;
    case '2': return document.getElementById('radio7').checked = true;
    case '3': return document.getElementById('radio8').checked = true;
  }
}

function setVelocityValue (value) {
  document.getElementById('velocity-input').value = Number(value).toFixed(1);
}

function setOffsetValue (value) {
  document.getElementById('offset-input').value = Number(value).toFixed(1);
}

function setPulsesValue (value) {
  switch (value) {
    case '1': return document.getElementById('radio9').checked = true;
    case '2': return document.getElementById('radio10').checked = true;
    case '3': return document.getElementById('radio11').checked = true;
  }
}

function setTVGValue (value) {
  switch (value) {
    case '10': return document.getElementById('radio12').checked = true;
    case '20': return document.getElementById('radio13').checked = true;
    case '30': return document.getElementById('radio14').checked = true;
    case '40': return document.getElementById('radio15').checked = true;
  }
}

function setDepthValues (value) {
  document.getElementById('depth-parameter').innerHTML = `Profundidad: ${value} m`;
  depthValues.push(Number(value));
  myChart.data.datasets[0].data = depthValues;
  myChart.data.labels = depthValues.map((_, index) => (index + 1));
  myChart.update();
}