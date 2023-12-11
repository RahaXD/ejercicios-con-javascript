const button=document.querySelector("button")
button.addEventListener("click",()=>
{
	let base=document.getElementByID("base").value
	let altura=document.getElementByID("altura").value
	let base1=parseInt(base);
	let altura1=parseInt(altura);
	let area=(base*altura)/2
	console.log(area);
	document.getElementByID("resultado").innerHTML="<h3>Area="+area+"<h3>";
})