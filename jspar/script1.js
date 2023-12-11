const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let numero=document.getElementById("numero").value
    let numero1=parseInt(numero);
    if(numero1 % 2 == 0){
    console.log(numero);
    document.getElementById("resultado").innerHTML="<h3>El numero= "+numero+" es PAR</h3>"; }
    else{
     console.log(numero);
    document.getElementById("resultado").innerHTML="<h3>El numero= "+numero+" es IMPAR</h3>";
    }
})