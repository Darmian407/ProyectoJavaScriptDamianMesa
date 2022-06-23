/* console.log('sacar un mensaje por consola 4');  */
console.log("Se inicio el Proyecto");

//Declaration

/* const nombre = "Damian"; const alumno1 = "Juan Carlos";

let saludo;
saludo = "Hola Mundo"; 

let saludo1 = "Hola Mundo"; */

/* let nombre = prompt("Ingrese su Nombre");
let edad = prompt("Ingrese su Edad");
console.log("Nombre: " + nombre + " de " + edad + " Años");
alert("Bienvendi@ " + nombre); */

//Entregable 1
let genera = document.getElementById("genera");
let borrar = document.getElementById("borrar");
let numero = document.getElementById("num");
let lienzo = document.getElementById("multi");
let contenido = document.getElementById("contenido");

genera.addEventListener("click", () => {
  for (let i = 1; i <= 10; i++) {
    lienzo.innerHTML += `${numero.value} * ${i} = ${numero.value * i} <br />`;
  }
});

