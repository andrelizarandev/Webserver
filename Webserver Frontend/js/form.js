// Sliders
var slider1 = document.getElementById("potential-range");
var slider2 = document.getElementById("sensibility-range");

// Forms
var form1 = document.getElementById("depth-range-form");
var form2 = document.getElementById("minimum-distance-form");
var form3 = document.getElementById("pulses-form");
var form4 = document.getElementById("tvg-form");

// Inputs
var input1 = document.getElementById("velocity-input");
var input2 = document.getElementById("offset-input");

// Titles 
var potentialTitle = document.getElementById("potential-value-text");
var sensibilityTitle = document.getElementById("sensibility-value-text");

// Past values 
var pastSlider1Value = 0;
var pastSlider2Value = 0;

var pastForm1Value = 0;
var pastForm2Value = 0;
var pastForm3Value = 0;
var pastForm4Value = 0;

var pastInput1Value = 0;
var pastInput2Value = 0;

setInterval(checkAllValues, 2000);

function checkAllValues () {

  const potential = validatedDidSlider1ValueChanged();
  const sensibility = validatedDidSlider2ValueChanged();
  const depth = validatedDidForm1ValueChanged();
  const minimumDistance = validatedDidForm2ValueChanged();
  const pulses = validatedDidForm3ValueChanged();
  const tvg = validatedDidForm4ValueChanged();
  const velocity = validatedDidInput1ValueChanged();
  const offset = validatedDidInput2ValueChanged();

  const objectValues = {
    Potencia: Number(potential.value),
    Sensibilidad: Number(sensibility.value),
    Profundidad: Number(depth.value),
    DistanciaMinima: Number(minimumDistance.value),
    Pulsos: Number(pulses.value),
    TVG: Number(tvg.value),
    Velocidad: velocity.value ? Number(velocity.value) : 0,
    Offset: offset.value ? Number(offset.value) : 0,
  }

  if (potential.isDifferent || sensibility.isDifferent || depth.isDifferent || minimumDistance.isDifferent || pulses.isDifferent || tvg.isDifferent || velocity.isDifferent || offset.isDifferent) postValues(objectValues);
  
}

async function postValues (values) {
  try {
    await fetch('http://localhost:4000/values', { method: 'POST', headers:fetchHeadersConfig, body: JSON.stringify({ values }) });
    alert('Valores actualizados')
  } catch (error) {
    alert('Error al actualizar los valores');
  }
}

function validatedDidSlider1ValueChanged () {
  const isValueDifferent = slider1.value != pastSlider1Value;
  pastSlider1Value = slider1.value;
  return { value:slider1.value, isDifferent:isValueDifferent}
}

function validatedDidSlider2ValueChanged () {
  const isValueDifferent = slider2.value != pastSlider2Value;
  pastSlider2Value = slider2.value;
  return { value:slider2.value, isDifferent:isValueDifferent}
}

function validatedDidForm1ValueChanged () {
  const formValue = form1.elements["radio"].value;
  const isValueDifferent = formValue != pastForm1Value;
  pastForm1Value = formValue;
  return { value:formValue, isDifferent: isValueDifferent }
}

function validatedDidForm2ValueChanged () {
  const formValue = form2.elements["radio"].value;
  const isValueDifferent = formValue != pastForm2Value;
  pastForm2Value = formValue;
  return { value:formValue, isDifferent: isValueDifferent }
}

function validatedDidForm3ValueChanged () {
  const formValue = form3.elements["radio"].value;
  const isValueDifferent = formValue != pastForm3Value;
  pastForm3Value = formValue;
  return { value:formValue, isDifferent: isValueDifferent }
}

function validatedDidForm4ValueChanged () {
  const formValue = form4.elements["radio"].value;
  const isValueDifferent = formValue != pastForm4Value;
  pastForm4Value = formValue;
  return { value:formValue, isDifferent: isValueDifferent }
}

function validatedDidInput1ValueChanged () {
  const isValueDifferent = input1.value != pastInput1Value;
  pastInput1Value = input1.value;
  return { value:input1.value, isDifferent: isValueDifferent }
}

function validatedDidInput2ValueChanged () {
  const isValueDifferent = input2.value != pastInput2Value;
  pastInput2Value = input2.value;
  return { value:input2.value, isDifferent: isValueDifferent }
}

// On change 
function onChangeSensibilitySlider () {
  sensibilityTitle.innerHTML = slider2.value;
}

function onChangePotentialSlider () {
  potentialTitle.innerHTML = slider1.value;
}

const fetchHeadersConfig = { 'Content-Type': 'application/json' }