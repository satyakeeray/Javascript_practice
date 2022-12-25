// Import stylesheets
import './style.css';
let outputDiv = document.getElementById('output');
let startYear = 2014;
let endYear = 2050;
for (let year = startYear; year <= endYear; year++) {
  outputDiv.innerHTML += '\n' + year;
}
