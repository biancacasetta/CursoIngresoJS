/*
Bianca Casetta
Enunciado EJ02:
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	var nombre;
	var mensaje;

	nombre = prompt("Ingrese su nombre", "Natalia natalia");
	mensaje = "Su nombre es: "+ nombre;
	alert(mensaje);
}
