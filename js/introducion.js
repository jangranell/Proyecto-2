//VARIABLES
var edad = 35;

let nombre = "Adam";

const ciudad = "Barcelona";

//OJO!

let num1 = 35;
let num2 = "35";
let num3 = 2;

let suma = num1 + num3;
let suma2 = num2 + num3;

let saludo = "hola";

let mensaje = saludo + nombre

console.log(mensaje) // Deberia mostrar "holaAdam"
console.log(suma) // Deberia mostrar "37"
console.log(suma2) // Deberia mostrar "352" (num2 es una string, y num3 es un numero)


//SRING 
//NUMBERS 
//BOOLEANS (True/False)

let gender = 1;

//si es true, entonces gender femenino

//ARRAY (Caja De Datos)
let caja = [1, 3, 5, 6, 20, 4, 0]

console.log(caja)

//INDEX (empieza a contar desde el 0)


let pizza = caja[3];

console.log("la manera de navegar en un arr es espoecificando entre [ ] el numero de index")


//OBJECT

let vivienda = {
    ciudad: "Valencia",
    m2: 90,
    wifi: false,
}
console.log(vivienda.m2);

//FUNCIONES - function (se tienen que llamar para mostrarse)

let primeraFuncion  = function(){
    let number1 = 30;
    let number2 = 20;

    console.log(number1 + number2)

    console.log("eso es un pequeño motor")
}


primerafuncion(); //Así se llaman las funciones

let segundaFuncion = function(x){

    let number1 = 10
    let suma = number1 + x;

    console.log(suma);

} 

segundaFuncion();

//Ejemplo Funcion

let medicionCombustible = function(litros){
    let = reserva = 2;
    let litrosTotales = reserva + litros;

    console.log(litrosTotales);
}

medicionCombustible(30);

medicionCombustible(50);


let mensajeLiga = function(liga){
    let nombreLiga = liga;
    console.log("La liga " + nombreLiga + " es la mejor del mundo");
}

mensajeLiga(española);

mensajeLiga(inglesa);
//Ejemplo CLub Futbol Objetos
let equipos = [
{
    club: "Real Madrid",
    entrenador: "Zidane",
    mejorJugador: "Hazard",
},
{
    club: "FC Barcelona",
    entrenador: "Luis Enrique",
    mejorJugador: "Messi",
},
{
    club: "Aletico de Madrid",
    entrenador: "Simeone",
    mejorJugador: "Llorente",
},
];

for(let i=0; i<equipos.length; i++){
    if(equipos[i].club == "Alético de Madrid"){
        console.log("El mejor jugador del Aléttico de Madrid es {equipos[i].mejorJugador}. ");
    }
}

let tbody = document.getElementById("table-body");

for(let i=0; i<equipos.length; i++){
    let tr = document.createElement("tr");

}