// Temperature Converter

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Example usage
let temp = 25; // Celsius

console.log(`${temp}°C = ${celsiusToFahrenheit(temp)}°F`);
console.log(`${temp}°C = ${celsiusToKelvin(temp)}K`);

let tempF = 77; // Fahrenheit
console.log(`${tempF}°F = ${fahrenheitToCelsius(tempF)}°C`);

let tempK = 298.15; // Kelvin
console.log(`${tempK}K = ${kelvinToCelsius(tempK)}°C`);