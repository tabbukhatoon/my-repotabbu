let button=document.querySelector(".mode");
let body=document.querySelector("body");
console.log(button,body);
let  mode='dark';
button.addEventListener("click",()=>{
    console.log("button was clicked");
if(mode==='dark'){
    mode='light'
    body.classList.add("light");
    body.classList.remove("dark");
}
else{
    mode='dark';
    body.classList.add("dark");
    body.classList.remove("light");
}
})
