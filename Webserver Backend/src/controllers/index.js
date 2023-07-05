// Modules
const { response, request } = require('express');

const valuesList = [];

function postMomentValues (req = request, res = response) {
  try {
    const { values } = req.body;
    valuesList.push(values);
    console.log(values);
    res.status(200).json({ msg:'Values updated' });
  } catch (err) {
    res.status(500).json({ msg:'Internal server error' });
  }
}

function getParameters (req = request, res = response) {
  const depth = Math.floor(Math.random() * 100);
  const depthWithLabel = `Profundidad: ${depth} m`;
  const fn1 = (Math.random() * 10).toFixed(1);
  const fn2 = (Math.random() * 10).toFixed(1);
  const fn3 = (Math.random() * 10).toFixed(1);
  const fn4 = (Math.random() * 10).toFixed(1);
  const fn5 = (Math.random() * 10).toFixed(1);
  const fn6 = (Math.random() * 10).toFixed(1);
  const gpsWithLabel = `${fn1}°${fn2}'${fn3}"N ${fn4}° ${fn5}' ${fn6}"O`;
  try {
    res.status(200).json({ gps:gpsWithLabel, depth:depthWithLabel });
  } catch (err) {
    res.status(500).json({ msg:'Internal server error' });
  }
}

module.exports = {
  postMomentValues,
  getParameters
}