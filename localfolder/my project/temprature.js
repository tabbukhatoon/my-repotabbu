let celsius=document.querySelector(".celsius");
let kelvin=document.querySelector(".kelvin");
let farenheit=document.querySelector(".farenheit");
console.log(celsius,kelvin,farenheit);
//celsius to farenheit=(0c * 9/5)+32=32f;
//clesius to kelvin =0c+273.15k;
celsius.addEventListener("input",()=>{
let c=parseFloat(celsius.value);
let f= (c*9/5)+32;
let k=c+273.15;
farenheit.value=f;
kelvin.value=k;
});
//