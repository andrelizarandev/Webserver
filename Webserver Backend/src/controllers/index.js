function handleMessages (message, ws) {
  const parsedMessage = JSON.parse(message);
  const { type, data } = parsedMessage;
  switch (type) {
    case 'parameters-from-app': return getParametersFromApp(data);
    case 'parameters-from-app-server': return getParametersFromAppServer(data, ws);
  }
}

function getParametersFromApp (data) {
  console.log('Parameters from app: ', data)
}

function getParametersFromAppServer (data, ws) {
  console.log('Parameters from app server: ', data)
  const payloadAsString = JSON.stringify({ type:'parameters-from-server', data });
  ws.send(payloadAsString);
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