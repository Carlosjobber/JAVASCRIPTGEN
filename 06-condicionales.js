/* Los condicionales se utilizan para otmas deciciones en nuestro progrma */

/*if (condicion) {

codigo
codigo
codigo

}*/

/*const edad = parseInt(prompt('Ingresa tu edad '));

if(edad >= 18 && edad <= 30) {
    document.write('Eres un joven');
} else if (edad >= 30 && edad < 60) {
    document.write('Eres un adulto');
} else if (edad >= 60) {
    document.write('Eres un adulto mayor');
 } else {
     document.write('Eres un niño');
 } */


 const compra = parseInt(prompt('Ingresa el precio de tu compra'));
 var descuento = 0;

if(compra < 100) {
    descuento = compra * 0.10
    
    document.write('Descuento');
} else if (compra >= 30 && compra < 60) {
    document.write('Eres un adulto');
} else if (compra >= 60) {
    document.write('Eres un adulto mayor');
 } else {
     document.write('Eres un niño');
 }
