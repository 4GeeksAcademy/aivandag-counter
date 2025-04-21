import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const Cronometro = () => {

    const [temporizador, setTemporizador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {

            setTemporizador(vAnt => vAnt + 1);

        }, 1000);

return () => clearInterval(intervalo);

}, []);


const c1 = Math.floor(temporizador / 100000) % 10;
const c2 = Math.floor(temporizador / 10000) % 10;
const c3 = Math.floor(temporizador / 1000) % 10;
const c4 = Math.floor(temporizador / 100) % 10;
const c5 = Math.floor(temporizador / 10) % 10;
const c6 = Math.floor(temporizador / 1) % 10;

return (
    <>
    <div className="container mt-5 ">
        <div className="contador d-flex justify-content-center bg-dark text-white">
            <div className="m-2 fs-1"><FontAwesomeIcon icon={faClock} /></div>
            <div className="m-2 fs-1">{c1}</div>
            <div className="m-2 fs-1">{c2}</div>
            <div className="m-2 fs-1">{c3}</div>
            <div className="m-2 fs-1">{c4}</div>
            <div className="m-2 fs-1">{c5}</div>
            <div className="m-2 fs-1">{c6}</div>
            </div>
        </div>
    </>
);
  };

export default Cronometro;