// Write a function convertTemperature(temp, unit) that:
//   Converts Celsius to Fahrenheit and vice versa.
//   Returns the converted temperature.
//   Example: convertTemperature(100, "C") → 212F.

function CelToFah(celsius) {
  return (celsius * 9) / 5 + 32;
}

function FahToCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(temp, unit) {
  if (unit == "C") {
    return CelToFah(temp) + "F";
  } else if (unit == "F") {
    return FahToCel(temp) + "C";
  } else {
    return "Unit Invaild";
  }
}

console.log(convertTemperature(212, "F"));
