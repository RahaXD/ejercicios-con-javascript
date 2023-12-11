const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let numerodos=document.getElementById("numerodos").value
    let numerouno=document.getElementById("numerouno").value
    let numerodos1=parseInt(numerodos);
    let numerouno1=parseInt(numerouno);
    if (numerouno<numerodos) {
        console.log(numerodos);
        document.getElementById("resultado").innerHTML="<h3>El mayor es: "+numerodos+"</h3>";
    }
    else{
    console.log(numerouno);
    document.getElementById("resultado").innerHTML="<h3>El mayor es: "+numerouno+"</h3>";}
})