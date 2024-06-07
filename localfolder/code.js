let button=document.querySelector(".button");
let body=document.querySelector("body");
let mode='dark';
console.log(button);
button.addEventListener("click",()=>{
    console.log('button was clicked');
if(mode==='dark'){
    mode='light';
    body.classList.add('light');
    body.classList.remove('dark');
}
else{
    mode='dark';
    body.classList.add("dark");
    body.classList.remove('light');
}
});