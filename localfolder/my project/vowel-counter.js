let input=document.querySelector("#input");
let button=document.querySelector(".button");
let msg=document.querySelector(".msg");
console.log(input,button,msg);
button.addEventListener("click",()=>{
    console.log('button was click');
let val=input.value;
console.log(val);
if(val=== ''){
    alert("please enter a text");
}
else{
    let score=0;
    for(i=0, i<val.length; i++;) {
        if(val[i]==="a" && val[i]==="u" && val[i]==="o" && val[i]==="i" && val[i]==="e" && )
        {
            score++;
        }
    }
}

    
})
