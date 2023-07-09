function handleMessages (message, wss) {
  const parsedMessage = JSON.parse(message);
  const { type, data } = parsedMessage;
  switch (type) {
    case 'parameters-from-app': 
      getParametersFromApp(data);
      break;
    case 'parameters-from-app-server': 
      getParametersFromAppServer(data, wss);
      break;
  }
}

function getParametersFromApp (data) {
  console.log('Parameters from app: ', data)
}

function getParametersFromAppServer (data, wss) {
  console.log('Parameters from app server: ', data)
  const payloadAsString = JSON.stringify({ type:'parameters-from-server', data });
  wss.clients.forEach((client) => client.send(payloadAsString));
}

function getGpsAndDepthValues () {
  const depth = Math.floor(Math.random() * 100);
  const depthWithLabel = `Profundidad: ${depth} m`;
  const fn1 = (Math.random() * 10).toFixed(1);
  const fn2 = (Math.random() * 10).toFixed(1);
  const fn3 = (Math.random() * 10).toFixed(1);
  const fn4 = (Math.random() * 10).toFixed(1);
  const fn5 = (Math.random() * 10).toFixed(1);
  const fn6 = (Math.random() * 10).toFixed(1);
  const gpsWithLabel = `${fn1}°${fn2}'${fn3}"N ${fn4}° ${fn5}' ${fn6}"O`;
  const data = { depth:depthWithLabel, gps:gpsWithLabel };
  return JSON.stringify({ type:'parameters', data });
}

module.exports = {
  handleMessages,
  getParametersFromApp,
  getGpsAndDepthValues,
  getParametersFromAppServer
}