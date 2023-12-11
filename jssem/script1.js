const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let numero=document.getElementById("numero").value
    let numero1=parseInt(numero);
    switch (numero1) {
        case 1:
          console.log('LUNES');
          document.getElementById("resultado").innerHTML="<h3>LUNES </h3>";
          break;
        case 2:
          console.log('MARTES');
          document.getElementById("resultado").innerHTML="<h3> MARTES </h3>";
          break;
        case 3:
          console.log('MIERCOLES');
          document.getElementById("resultado").innerHTML="<h3> MIERCOLES </h3>";
          break;
        case 4:
          console.log('JUEVES');
          document.getElementById("resultado").innerHTML="<h3> JUEVES </h3>";
          break;
        case 5:
            console.log('VIERNES');
            document.getElementById("resultado").innerHTML="<h3> VIERNES </h3>";
          break;
        case 6:
          console.log('SABADO');
          document.getElementById("resultado").innerHTML="<h3> SABADO </h3>";
          break;
          case 7:
          console.log('DOMINGO');
          document.getElementById("resultado").innerHTML="<h3> DOMINGO </h3>";
          break;
        default:
      }
})