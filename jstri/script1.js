const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let base=document.getElementById("base").value
    let altura=document.getElementById("altura").value
    let base1=parseInt(base);
    let altura1=parseInt(altura);
    let area=(base*altura)/2;
    console.log(area);
    document.getElementById("resultado").innerHTML="<h3>Area= "+area+"</h3>";
})