let temperature = 50;
let windSpeed = 2;

let windChill;

if(temperature <= 50 && windSpeed < 3) {
    windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

}
else {
    windChill = "n/a"
}

document.querySelector("#windChill").textContent = windChill;
document.querySelector("#temp").textContent = temperature;


 