function getParameters (data) {
  const parsedData = JSON.parse(data);
  console.log(parsedData);
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
  getParameters,
  getGpsAndDepthValues
}