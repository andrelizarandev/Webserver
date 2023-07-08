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

var pastForm1Value = 20;
var pastForm2Value = 0;
var pastForm3Value = 'Corto';
var pastForm4Value = 10;

var pastInput1Value = 0;
var pastInput2Value = 0;

setInterval(checkAllValues, 1000);

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
    Potencia: potential.value,
    Sensibilidad: sensibility.value,
    Profundidad: depth.value,
    DistanciaMinima: minimumDistance.value,
    Pulsos: pulses.value,
    TVG: tvg.value,
    Velocidad: velocity.value || 0,
    Offset: offset.value || 0
  }

  if (potential.isDifferent || sensibility.isDifferent || depth.isDifferent || minimumDistance.isDifferent || pulses.isDifferent || tvg.isDifferent || velocity.isDifferent || offset.isDifferent) postValues(objectValues);
  
}

function validatedDidSlider1ValueChanged () {
  const valueAsNumber = Number(slider1.value);
  const isValueDifferent = valueAsNumber != pastSlider1Value;
  pastSlider1Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent:isValueDifferent }
}

function validatedDidSlider2ValueChanged () {
  const valueAsNumber = Number(slider2.value);
  const isValueDifferent = valueAsNumber != pastSlider2Value;
  pastSlider2Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent:isValueDifferent }
}

function validatedDidForm1ValueChanged () {
  const valueAsNumber = Number(form1.elements["radio"].value);
  const isValueDifferent = valueAsNumber != pastForm1Value;
  pastForm1Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent: isValueDifferent }
}

function validatedDidForm2ValueChanged () {
  const valueAsNumber = Number(form2.elements["radio"].value);
  const isValueDifferent = valueAsNumber != pastForm2Value;
  pastForm2Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent: isValueDifferent }
}

function validatedDidForm3ValueChanged () {
  const formValue = form3.elements["radio"].value;
  const isValueDifferent = formValue != pastForm3Value;
  pastForm3Value = formValue;
  return { value:formValue, isDifferent: isValueDifferent }
}

function validatedDidForm4ValueChanged () {
  const valueAsNumber = Number(form4.elements["radio"].value);
  const isValueDifferent = valueAsNumber != pastForm4Value;
  pastForm4Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent: isValueDifferent }
}

function validatedDidInput1ValueChanged () {
  const valueAsNumber = (input1.value) ? Number(input1.value) : 0
  const isValueDifferent = valueAsNumber != pastInput1Value;
  pastInput1Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent: isValueDifferent }
}

function validatedDidInput2ValueChanged () {
  const valueAsNumber = (input2.value) ? Number(input2.value) : 0
  const isValueDifferent = valueAsNumber != pastInput2Value;
  pastInput2Value = valueAsNumber;
  return { value:valueAsNumber, isDifferent: isValueDifferent }
}

// On change 
function onChangeSensibilitySlider () {
  sensibilityTitle.innerHTML = slider2.value;
}

function onChangePotentialSlider () {
  potentialTitle.innerHTML = slider1.value;
}