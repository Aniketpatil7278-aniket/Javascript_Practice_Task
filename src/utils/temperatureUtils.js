export const celsiusToFahrenheit = (celsius) => {
  return((celsius *9/5) +32);    // F=(c *9/5) +32
};
 

export const fahrenheitToCelsius =(fahrenheit)=>{
    return((fahrenheit - 32) * 5/9);     //c=(F-32) * 5/9
}