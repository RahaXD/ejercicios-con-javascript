const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let numerouno=document.getElementById("numerouno").value
    let numerodos=document.getElementById("numerodos").value
    let numerotres=document.getElementById("numerotres").value
    let numerocuatro=document.getElementById("numerocuatro").value
    let numerocinco=document.getElementById("numerocinco").value
    let numeroseis=document.getElementById("numeroseis").value
    let numerosiete=document.getElementById("numerosiete").value
    let numeroocho=document.getElementById("numeroocho").value
    let numerouno1=parseInt(numerouno);
    let numerodos1=parseInt(numerodos);
    let numerotres1=parseInt(numerotres);
    let numerocuatro1=parseInt(numerocuatro);
    let numerocinco1=parseInt(numerocinco);
    let numeroseis1=parseInt(numeroseis);
    let numerosiete1=parseInt(numerosiete);
    let numeroocho1=parseInt(numeroocho);
    let sumatoria=numerouno1+numerodos1+numerotres1+numerocuatro1+numerocinco1+numeroseis1+numerosiete1+numeroocho1;
    console.log(sumatoria);
    document.getElementById("resultado").innerHTML="<h3>La sumatoria de los 8 numeros es: = "+sumatoria+"</h3>";
})