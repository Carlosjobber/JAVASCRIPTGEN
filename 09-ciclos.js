/*

Ciclos - Bucles - Loops

while
do while  
for 

*/

//While

/*

let condicion = 1; - valor inicial
while(condicion){t
    tu código
    modificación a nuestro valor inicial 
}

*/

// imprimir todos los numeros del 1 -10

/*let condicion = 1; 
while (condicion <=10){
console.log(condicion);
//condicion = condicion +1;
condicion++;
}

let numero =1;
numero++;
numero++;
numero++;
console.log(numero);

/*

Do while

*/

let numero = 1;

do{
    console.log(numero);
    numero++;


} while(numero <=10);

/*

for
utiliza un contador
*/

for (let control = 1; control <= 10; control ++) {
    console.log(control);



}

const comidas = ['pozole', 'frijol', 'tamal', 'coca']

for(let i = 0; i<= comidas.length; i++) {

    console.log(comidas[i]);

}





/* ejercicio grupal */



const numero = new Array (1, 4, 7, 9, 19, 15, 46, 27, 40, 123);
console.log(numeros);

let resultados = [];

numeros.forEach(function(elemento){
    let multiplicarCadaElemento = elemento * 2;
    return resultados.push(multiplicarCadaElemento);
})

console.log(resultados);

for (let i =0; i < resultados.length; i++){
    console.log("Elemento:" + resultados[i]);
}