//Question A

//Store two persons' mass and height in variables

const lucas_weight=78
const lucas_height=1.69
const peter_weight=92
const peter_height=1.95
const lucas_bmi=(lucas_weight/(lucas_height*lucas_height)).toFixed(3);
const peter_bmi=(peter_weight/(peter_height*peter_height)).toFixed(3);
const lucasHigherBMI=peter_bmi>lucas_bmi
console.log(`The BMI of Peter is ${peter_bmi} , The BMI of Lucas is ${lucas_bmi} , Peter's  BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`) ;

//Question B-The Temperature Converter
const celsius=98
console.log(`${celsius} °C is ${(celsius * Math.trunc(9/5) + 32)} °F`)

//convert fahrenheit to celsius
const fahrenheit=110
console.log(`${celsius} °F is ${(Math.trunc(5/9)*fahrenheit - 32)} °C`)

//Question C-Improve the code you wrote for the BMI example from part A
if(lucas_bmi>peter_bmi)
{
	console.log(`Lucas' BMI ${lucas_bmi} is higher than John's BMI ${peter_bmi}`);
}
else
{
	console.log(`Lucas' BMI ${lucas_bmi} is lower than John's BMI ${peter_bmi}`);
}

//Question D-Create 2 functions (Arrow Function Preferred) to convert temperature:

 CovertCelsiusToFahrenheit=(celsius)=>{return `${celsius}°C is ${(celsius * (9/5) + 32)} °F`; }
 CovertFahrenheitToCelsius=(fahrenheit)=>{return `${fahrenheit}°F is ${(Math.trunc(5/9)*fahrenheit - 32)} °C`; } 

 console.log(CovertCelsiusToFahrenheit(100))
 console.log(CovertCelsiusToFahrenheit(0))
 console.log(CovertCelsiusToFahrenheit(10))
 console.log(CovertFahrenheitToCelsius(32))
 console.log(CovertFahrenheitToCelsius(10))
 console.log(CovertFahrenheitToCelsius(102))