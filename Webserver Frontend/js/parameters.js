setInterval(getParameters, 2000);

async function getParameters () {
  try {
    const response = await fetch('http://localhost:4000/parameters', { method: 'GET', headers:fetchHeadersConfig });
    const parsedResponse = await response.json();
    const { gps, depth } = parsedResponse
    document.getElementById('gps-parameter').innerHTML = gps;
    document.getElementById('depth-parameter').innerHTML = depth;
  } catch (error) {
    alert('Error al actualizar los valores');
  }
}
