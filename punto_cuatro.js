
const sablesdeLuzTotales = [1, -4, 2, -2, 5, -7, 8, -1];

const sablesPositivos = [];
const sablesNegativos = [];

function calcularSables(){
	sablesdeLuzTotales.forEach(num => {
		num >= 0 ? 
		sablesPositivos.push(num) :
		sablesNegativos.push(num); 
})
	return "La cantidad de sables contada fue: " + sablesdeLuzTotales + " Los sables positivos fueron: " + sablesPositivos + " y los sables negativos fueron: " + sablesNegativos;
}
console.log(calcularSables())


const calcularSablesFlecha = () =>{
	sablesdeLuzTotales.forEach(num => {
		num >= 0 ? 
		sablesPositivos.push(num) :
		sablesNegativos.push(num); 
})
	return "La cantidad de sables contada fue: " + sablesdeLuzTotales + " Los sables positivos fueron: " + sablesPositivos + " y los sables negativos fueron: " + sablesNegativos;
}
console.log(calcularSablesFlecha)