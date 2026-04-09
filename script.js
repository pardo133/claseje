import {personajes,Lavadora,Secadora,guerrero,mago,Coche, Moto,Camion} from "./ejercicios.js";

const miGuerrero = new guerrero(100, 5, 80);
const miMago = new mago(60, 8, 150);

document.getElementById("datos-guerrero").innerText = 
    `Vida: ${miGuerrero.vida} | Nivel: ${miGuerrero.nivel} | Aguante: ${miGuerrero.aguante}`;

document.getElementById("datos-mago").innerText = 
    `Vida: ${miMago.vida} | Nivel: ${miMago.nivel} | Maná: ${miMago.mana}`;

console.log("Guerrero:", miGuerrero);
console.log("Mago:", miMago);

////////////////////////////////////////


const miCoche = new Coche("Mercedes", "Clase A");
const miMoto = new Moto("Kawasaki", "Ninja");
const miCamion = new Camion("Volvo", "Pegasus ");

document.getElementById("datos-coche").innerText = 
    `Marca: ${miCoche.marca} | Modelo: ${miCoche.modelo} | Ruedas: ${miCoche.ruedas}`;

document.getElementById("datos-moto").innerText = 
    `Marca: ${miMoto.marca} | Modelo: ${miMoto.modelo} | Ruedas: ${miMoto.ruedas}`;

    document.getElementById("datos-camion").innerText = 
    `Marca: ${miCamion.marca} | Modelo: ${miCamion.modelo} | Ruedas: ${miCamion.ruedas}`;
//////////////////////////////////////////
const lavi = new Lavadora("Lavadora LG Pro", 220, 500);
const seca = new Secadora("Secadora Turbo", 220, 400);

const tienda = document.getElementById("contenedor-tienda");


const lavadoraDiv = document.createElement("div");
lavadoraDiv.innerHTML = 
    `<h3>${lavi.nombre}</h3>
        <p>Voltaje: ${lavi.voltaje}V</p>
        <p>Precio: $${lavi.precio}</p>
        <p>Eficiencia: ${lavi.eficiencia}</p>`;
tienda.appendChild(lavadoraDiv);

const secadoraDiv = document.createElement("div");
secadoraDiv.innerHTML = 
    `<h3>${seca.nombre}</h3>
        <p>Voltaje: ${seca.voltaje}V</p>
        <p>Precio: $${seca.precio}</p>
        <p>Eficiencia: ${seca.eficiencia}</p>`;
tienda.appendChild(secadoraDiv);
