function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "cero";
    }
} 
// ejemplos 
var resultado1 = verificarNumero(5); 
console.log(resultado1); 

var resultado2 = verificarNumero(-4); 
console.log(resultado2); 

