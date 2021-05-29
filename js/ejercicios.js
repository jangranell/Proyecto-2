 //1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()
let edadfernandoSimon = 57;
let miEdad = 18;

if(edadfernandoSimon > miEdad){
     console.log("Jan es más joven que Fernando Simón(ex1)")
} else { 
    if(edadfernandoSimon < miEdad){
         console.log("Jan es más mayor que Fernando Simón(ex1)")
     } else{
        console.log("Jan tiene la misma edad que Fernando Simón(ex1)")
     }  
}

//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %
let parImpar = function(nombreEntero){

nombreEntero = 33;

if(nombreEntero % 2 == 0){
    return "El numero introducido, " + nombreEntero + ", es par (ex2)";
} else{
    return "El numero introducido, " + nombreEntero + ", es impar(ex2)";
}
}

let resultado = parImpar
console.log(resultado);

//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
console.log(" (ex3)")

for(let i=0; i<numeros.length; i++){
    if(numeros[i] % 3 == 0){
        
        console.log(numeros[i]);
    
    }
}
console.log(" (ex3)")

//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

var menor= 0;

for (i=0; i<=menor;i++){
    if (numeros[i]>menor) {
        var menor=numeros[i];
    }
}

console.log(menor + " (ex4)")

//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()
var mayor= 0;

for (i=0; i<=mayor;i++){
    if (numeros[i]>mayor) {
        var mayor=numeros[i];
    }
}

console.log(mayor + " (ex5)")

//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes() || indexOf()

function numerosRepetidos(arr){
    let  array = arr;
    let repetidos = [];
    for(let i=0; i<array.length; i++){
        for (let j = 0; j < array.length; j++) {
            let estaRepetido = false;
            for (let k = 0; k < repetidos.length; k++){
                if (array[i] == repetidos[k]){
                    estaRepetido = true;
                }
            }
            if(j != i && array[i] == array[j] && estaRepetido == false){
                repetidos.push(array[i]);
            }
        }
    }
    console.log(repetidos + " (ex6)")
}
numerosRepetidos(numeros)

//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()


//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()


//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()


//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()


//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 27,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};


//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()


//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado

  
  