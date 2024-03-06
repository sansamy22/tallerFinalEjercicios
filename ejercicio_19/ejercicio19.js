var numero1 = prompt("por favor, ingresa el primer numero: "); 
var numero2 = prompt("Ahora ingresa el segundonumero: "); 

numero1 = parseFloat(numero1); 
numero2 = parseFloat(numero2);   

if (numero1 > numero2) {
    console.log("el mayor numero es: " + numero1); 

} else if (numero2 > numero1) {
    console.log ("el numero mayor es: " + numero2);
} else {
    console.log ("los numeros son iguales");
}
