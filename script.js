var f = 100;
var c = 98;

var convertToC = (f-32)*5/9;
var convertToF = c*9/5+32;

console.log(convertToC);
console.log(convertToF);

document.write(f + " degrees Fahrenheit = " + convertToC.toFixed(2) + "degrees Celsius.")
document.write(c + " degrees Celsius = " + convertToF.toFixed(2) + "degrees Fahrenheit")