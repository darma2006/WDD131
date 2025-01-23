document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return Math.round(windChill) + "°C";
    } else {
        return "N/A"; 
    }
}

let temperature = 15; 
let windSpeed = 10; 

document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);

