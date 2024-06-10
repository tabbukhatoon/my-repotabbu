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
//kelvin to celcius=>0K-273.15=-273.1c;
// kelvin to farenheit=>0k--273.15*9/5+32=-459.7F;
kelvin.addEventListener("input",()=>{
let k=parseFloat(kelvin.value);
let f=k-273.15 *(9/5)+32;
let c=k-273.15;
farenheit.value=f;
celsius.value=c;
});

//farenheit to kelvin=32f-32*273.15=273.15k;
//farenheit to celicus=32f-32*9/5;
 
farenheit.addEventListener("input",()=>{
    let f=parseFloat(farenheit.value);
    let k=(f-32)*9/5+273.15;
    let c=(f-32)*9/5;
    kelvin.value=k;
    celsius.value=c;
})