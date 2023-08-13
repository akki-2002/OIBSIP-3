let a;
let date;
let timee;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    

a = new Date();
 date = a.toLocaleDateString(undefined, options);
 timee = a.getHours() + ':' + a.getMinutes();
document.getElementById('time').innerHTML= timee + "	&nbsp;" + date;
}, 1000);


function convertTemperature() {
    const inputDegree = document.getElementById('degree').value;
    const selectedType = document.getElementById('type').value;
  
    if (isNaN(inputDegree)) {
      alert('Please enter a valid number for the degree.');
      return;
    }
  
    const degree = parseFloat(inputDegree);
  
    let convertedTemperature;
    let resultType;
  
    if (selectedType === 'celsius') {
      convertedTemperature = (degree - 32) * (5 / 9);
      resultType = 'C';
    } else if (selectedType === 'fahrenheit') {
      convertedTemperature = degree * (9 / 5) + 32;
      resultType = 'F';
    } else if (selectedType === 'kelvin') {
      convertedTemperature = degree + 273.15;
      resultType = 'K';
    }
  
    document.getElementById('result').value = `${convertedTemperature.toFixed(2)} \u00B0${resultType}`;
  }
  
  