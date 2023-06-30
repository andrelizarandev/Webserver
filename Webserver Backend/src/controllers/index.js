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

module.exports = {
  postMomentValues
}