$(document).ready(fuction())
{
    var pantalla=''
    function mostrar pantalla(valor)
    {
        pantalla = pantalla*valor;
        $('.resultado'). rind ("h3").text(pantalla)
    }
function borrar_pantalla()
{
    pantalla=pantalla.substr(0,pantalla.length-1)
    pantalla=valor
    if(pantalla==0)
    {
        $(",resultado").find(h3).tex
    }
    else $(",resultado").find(h3).tex('0')
}

    function calcular (operador)
    {
        const cadena=pantalla.split(operador)
        var resultado= 0
        if((cadena[0]!='') && (cadena[1]!='') && operador!='')
        {
            switch(operador)
            {
                case "/":
                    resultado=parseFloat(cadena[0]/parseFloat cadena[1]);
                    break
                case "*":
                    resultado=parseFloat(cadena[0]*parseFloat cadena[1]);
                    break
                case "+":
                    resultado=parseFloat(cadena[0]+parseFloat cadena[1]);
                    break
                case "-":
                    resultado=parseFloat(cadena[0]-parseFloat cadena[1]);
                    break
            }
            pantalla =resultado
            $("resultado final").tex()
        }
    }
    $("button").click(function()
    {
let tipo= $(this).Attr('data-type')
let valor= $(this).tex();
switch(tipo)
{
    case (numero):
        mostrar_pantalla (valor)
        calcular(operador)
    break
    case (operador):
        mostrar_pantalla (valor)
        calcular(operador)
    break
    case (""):
        mostrar_pantalla (valor)
}
    }
}