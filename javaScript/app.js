
// Comentario de una linea

/**
 * Comentario multilinea
 */
/*
console.log("Hola Mundo");

// Variables

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion, mod;


const pi = 3.14156;

let estado=true;

let numero3=78;

let direccion = "CALLE 11 # 40-69";

let nulo = null;


numero3 = 125;


console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion);


suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
mod = numero1 % numero2;


console.log(suma)


// Concatenar valores

console.log('EL PRIMER VALOR ES: ' + numero1);
console.log('EL SEGUNDO VALOR ES: ' + numero2);
console.log('LA SUMA DE ' + numero1 + ' Y ' + numero2 +' ES: ' + suma);
console.log('LA SUMA DE ' , numero1 , ' Y ' , numero2 ,' ES: ' , suma);

// Literal Template
console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);
console.log(`LA DIVISION MODULO DE ${numero1} Y ${numero2} ES: ${mod}`);

console.log(typeof(estado));
console.log(typeof(direccion));
console.log(typeof(numero3));
console.log(typeof(nulo));

// Ingreso de datos por el usuario

//let nu1 = parseInt(prompt(("Ingrese el primero valor")));
//let nu2 = parseFloat(prompt(("Ingrese el segundo valor")));

//let s = nu1+nu2;


//console.log(`EL PRIMER VALOR INGRESADO ES: ${nu1} Y EL SEGUNDO VALOR ES: ${nu2}`);
//console.log(`LA SUMA : ${s}`);


// Generacion de numeros aleatorios
 // NUmero aleatorio entre 1 - 5

 // Forma1
let alea = Math.floor(Math.random() * 50 ) + 1;

console.log(alea);

//Forma 2
// Genera un aleatorio entre 0 y 99

let alea1 = Math.floor(Math.random() * 100 );
console.log(alea1);
*/


// ESTRUCTURA EL IF

//let edad = 18;

/*
if(edad >= 18){
console.log("ES MAYOR DE EDAD");
}else{
    console.log("ES MENOR DE EDAD");
}
    */

// OPERADOR TERNARIO
/*
let res = (edad>=18)? "Es mayor de edad": "Es menor de edad";

console.log(res);
*/



//let nu1 = parseInt(prompt(("Ingrese el primero valor")));
//let nu2 = parseFloat(prompt(("Ingrese el segundo valor")));

/*
let edad = 34;

if(edad >=0 && edad <=5){
console.log('Eres un Infante');
}else if(edad >=6 && edad <=11){
    console.log('Eres un Niño');
}else if(edad >=12 && edad <=17){
    console.log('Eres un Adolescente');
}else if(edad >=18 && edad <=29){
    console.log('Eres un Joven');
}else if(edad >=30 && edad <=59){
    console.log('Eres un Adulto');
}else{
    console.log('Eres adulto Mayor');
}
*/
/*
if(edad <=5){
    console.log('Eres un Infante');
    }else if(edad <=11){
        console.log('Eres un Niño');
    }else if(edad <=17){
        console.log('Eres un Adolescente');
    }else if(edad <=29){
        console.log('Eres un Joven');
    }else if(dad <=59){
        console.log('Eres un Adulto');
    }else{
        console.log('Eres adulto Mayor');
    }
*/


// Ejercicio 2
/*
let calificacion;


calificacion = parseFloat(prompt("Ingrese calificación"));

if(calificacion < 3.0 ){
console.log("REPROBO");
}else if(calificacion > 3.1 && calificacion <=4.0  ){
    console.log("ESTUDIANTE APROBO");
}else{
    console.log("ES muy bueno");
}
*/

// Estructura el Switch Case

/*

let operador = "*";


switch(operador){


    case "+":

    break;

    case "-":

    break;

    case "*":
        console.log("Multiplicacion");

    break;

    case "/":

    break;

    default: console.log("Operacion no existe");

}
*/

/*
dolar = 4280
euro = 4728
libra = 5601
*/


// Estructuras repetitivas

// INCREMENTO
/*
let tabla = 4;

for (let i = 1; i<=10; i++){
    console.log(`${tabla} * ${i} = ${(tabla*i)}`);
    
    }

    console.log("--------------------------------------------------")

// DECREMENTO

for(let j = 20; j >= 1; j-=2){
    console.log(j);

}
*/
// Ejercicios While

//Ejercicio 1
/*
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
*/

//Ejercicio 2
/*
const numero = 5;
let i = 1;
while (i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}
*/

//Ejercicio 3
/*
const contraseñaCorrecta = "secreta";
let contraseñaUsuario = "";
while (contraseñaUsuario !== contraseñaCorrecta) {
    contraseñaUsuario = prompt("Introduce la contraseña:");
}
console.log("Contraseña correcta!");
*/



// Ejercicio do while
//Ejercicio 1
/*
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
 */

//Ejercicio 2
/*
let suma = 0;
let i = 1;
do {
    suma += i;
    i++;
} while (i <= 50);
console.log(`La suma de los números del 1 al 50 es ${suma}`);
*/

//Ejercicio 3
/*
let numero;
do {
    numero = parseInt(prompt("Introduce un número positivo:"));
} while (numero <= 0);
console.log(`Número positivo ingresado: ${numero}`);

*/

//Ejercicio 4
/*
const limite = parseInt(prompt("Introduce el límite:"));
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= limite);
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // Espacio entre tablas
}
*/



// Menu de opciones
/*
let opcion;
let estado = true;
let n1,n2,sum,res,ra;

n1 = parseInt(prompt(`Ingrese el primer valor`));  // 6
n2 = parseInt(prompt(`Ingrese el segundo valor`)); // 6


while(estado){

  opcion = parseInt(prompt(`1. Suma \n 2. Resta \n 3. Raiz \n 4. Salir`));
  switch(opcion){

    case 1: console.log("Suma");
  
    alert(`LA RESULTADO DE LA SUMA ES: ${suma(n1,n2)}`);
   
    break;

    case 2: console.log("Resta");
    res = n1 - n2;
    alert(`LA RESTA ES: ${res}`);
    break;

    case 3: console.log("Raiz de N1");
    ra = Math.sqrt(n1);
    alert(`LA SUMA ES: ${ra}`);
    break;



    case 4: 
    estado = false;
    break;

    default: alert("Opcion no existe");

  }


}

function suma(n1,n2){

    return n1 + n2;

}
*/



// Ejemplo 1
/*
 let nom = "Juan"

saludar(nom);

function saludar(nombre){
  alert(`Hola ${nombre}`);
}

*/
// Ejemplo 2
/*

function raiz(numero){

return Math.sqrt(numero);

}

console.log(raiz(18));
*/


// Ejemplo 3
/*
const a = 12;

const b = 6;


function exponente(base, cuadrado){

return Math.pow(base, cuadrado);

}

console.log(`EL CUADRADO ES: ${exponente(a, b)}`);
*/


/*
// FORMA 1
// FUNCION TRADICIONAL

function mutlipliacion (a,b){
    return a*b;
}


console.log(mutlipliacion(8,5));

// Funcion flecha 

// FORMA 2

let multiplicaicon1 = (a,b) => {
    return a*b;
}

console.log(multiplicaicon1(6,3));


// FORMA 3

let multiplicacion2 = (a,b) => a*b;

console.log(multiplicacion2(3,7));

// Otro ejercicio 

function raiz(numero){

    return Math.sqrt(numero);
    
    }
    
    console.log(raiz(18));


let ra = (numero) => Math.sqrt(numero);


console.log(ra(25));


let funcion = () => console.log("Hola, soy una funcion sin parametros");

funcion();
*/



// ARREGLOS

/*
let estudiantes = ["Laura", "Julian", "Andres", "Oscar", "Paola"];

console.log(estudiantes)

// Añadir un elemento al final 

console.log(estudiantes.push("Ricardo"));

console.log(estudiantes)

// Agrego elementos al inicio

console.log(estudiantes.unshift("Esmeralda"));

console.log(estudiantes)

// Añadir elementos en alguna posicion

console.log(estudiantes.splice(2 , 0  , "Sofia"));

console.log(estudiantes)

// Eliminar ultimo

console.log(estudiantes.pop());

console.log(estudiantes)

// Elimminar elemento en una posicion

console.log(estudiantes.splice(2, 1));

// Eliminar el primer elemento

console.log(estudiantes.shift());

console.log(estudiantes)

// Posicion de un elemento

console.log(estudiantes.indexOf("Andres"));

console.log(estudiantes)


// Recorrer el arreglos

// op 1

estudiantes.forEach((est) =>{

    if(est === estudiantes[3] ){
        console.log(est)

    }

});

/*
for(let est of estudiantes){

    console.log(est);

}
*/

/*
let vector = [];

// Recorrer para llenarlo

for(let i = 0; i < 5; i++){

vector.push(i+1); 

}


// Recorro para mostrar
for(let i = 0; i< 5 ; i++){

    console.log(vector[i]);

}

*/

// SUMAR LOS NUMEROS DEL ARREGLOS
// For tradicional
/*
let numeros = [12,23,18,16,19];
let suma = 0;

for(let i = 0; i < numeros.length; i++){


    suma += numeros[i]; 

}

console.log(`LA SUMA ES: ${suma}`);

/*
// foreach
numeros.forEach((nu) => {

    suma += nu; 

});

console.log(`LA SUMA ES: ${suma}`);
*/
/*
let num  =  new Array(5); 


for (let i = 0 ; i< num.length; i++){

    num[i] =  parseInt(prompt("Ingrese el numero entero"));

}


for (let i = 0 ; i< num.length; i++){

    console.log(`${num[i]}`)

}
*/
/*
let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let calificaciones = new Array(tamanio);
//let cont = 0;
let sumar=0;
let max=0;

for (let i = 0; i < calificaciones.length; i++){

    calificaciones[i] = parseFloat(prompt("Ingrese las notas"));
  
    
}

for(let i = 0; i < calificaciones.length; i++){
    // cont++;
console.log(`Calificacion ${i+1} :  ${calificaciones[i]}`);
sumar += calificaciones[i]; 

if(calificaciones[i] > max){
    max = calificaciones[i];
}

}

console.log(`LA SUMA DE LAS CALIFICACIONES: ${sumar}`);
console.log(`EL PROMEDIO DE LAS CALIFICAICONES ES: ${(sumar/tamanio)}`);
console.log(`LA CALIFICACION MAYOR ES: ${max}`);
*/


// Objetos Clave - Valor
/*
let carro1 = {
    marca: "Ford",
    modelo: "Fiesta",
    color: "Rojo",
    anio: "2018",
    placa: "ABC123"
}

let carro2 = {
    marca: "Renault",
    modelo: "Logan",
    color: "Azul",
    anio: "2019",
    placa: "XYZ321",
    acelerar(){
        return "El carro 2 esta acelerando";
    }
}

console.log("Datos carro 1 " , carro1 );
console.log("Datos carro 2 " , carro2 );


console.log(`LA MARCA DEL VEHICULO 1 ES: ${carro1.marca} `)
console.log(`LA PLACA DEL VEHICULO 2 ES: ${carro2.placa} `)


carro1.marca = "Toyota";
carro1.color = "Gris";

console.log("lOS DATOS DEL VECHICULO 1 SON: " , carro1);


console.log(carro2.acelerar());
*/

/*
class Persona{
                                                                        // VARIABLES - camelCase   // Clase - PascalCase
    constructor(nombre, edad){

        this._nombre = nombre;
        this._edad = edad;

    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }


    saludar(){
        console.log(`Hola soy ${this._nombre} Y TENGO ${this._edad} años`);
    }



}

const per1  = new Persona("Juan", 25);

per1.saludar();

const per2 = new Persona("Andres", 28);


per1.nombre = "Lorena";


per2.edad = 45;


per1.saludar();

per2.saludar();
*/

/*
class Libro{

    constructor(titulo, autor, paginas){

        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;

    }


    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    get autor(){
        return this._autor;
    }

    set autor(autor){
        this._autor = autor;
    }

    get paginas(){
        return this._paginas;
    }

    set paginas(paginas){
        this._paginas = paginas;
    }


    mostarInfo(){

        console.log(`El titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas} Paginas`);

    }


}


let l1 = new Libro("El relato de un naufrado", "Pepito", "230");
let l2 = new Libro("EL principito", "Jorge", "180");
let l3 = new Libro("EL Programador", "Lucia", "430");



console.log(l1.titulo)
console.log(l2.titulo)
console.log(l3.titulo)

l1.autor = "Carlos";
l2.autor = "Pablo";
l3.autor = "Ana";





l1.mostarInfo()
l2.mostarInfo()
l3.mostarInfo()

*/


class Producto{

    constructor(nombre,precio,cantidad){
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad
    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }


    mostrarNombreProducto(){
        console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
    }


    valorTotal(){
        return this._precio * this._cantidad;
    }


    modificarCantidad(nuevoCantidad){

        this._cantidad = nuevoCantidad;

        console.log(`La nueva cantidad es: ${this._cantidad}`)

    }


}

const prod1 = new Producto("Mouse", 45000, 5);
const prod2 = new Producto("Monitor", 1450000, 3);


prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();

console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);


prod1.modificarCantidad(8);
prod2.modificarCantidad(6);

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();

console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);





































