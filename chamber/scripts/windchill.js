let temperature = document.querySelector("#temp");
let windSpeed = document.querySelector("#speed");

let windChill;

// if(temperature <= 50 && windSpeed > 3) {
//     windChill = Math.floor(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));

// }
// else {
//     windChill = "n/a"
// }

// document.querySelector("#windChill").textContent = windChill;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.5387&lon=-112.1860&units=imperial&appid=d7bb0dd92a04238853fc9784824a1e33';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }


if(temperature <= 50 && windSpeed > 3) {
    windChill = Math.floor(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));

}
else {
    windChill = "n/a"
}
document.querySelector("#windChill").textContent = windChill;