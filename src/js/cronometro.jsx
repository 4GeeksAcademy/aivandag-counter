import react from "react";


const reloj = (temporizador) => {

const c1 = Math.floor(temporizador / 100000) %10;
const c2 = Math.floor(temporizador / 10000) %10;
const c3 = Math.floor(temporizador / 1000) %10;
const c4 = Math.floor(temporizador / 100) %10;
const c5 = Math.floor(temporizador / 10) %10;
const c6 = Math.floor(temporizador / 1) %10;


}