"use cliente";

import { useEffect, useState } from "react";  
import styles from './Relogio.module.css';

export default function Relogio(){
    const [hora, sethora] = useState(new Date());

    useEffect(()=> {
    const intervalo = setInterval(() => sethora(new Date()), 1000);
    return () => clearInterval(intervalo);
    },[]);

    const horas = hora.toLocaleTimeString("pt-BR",{
        hour: "2-digit",
        minute: "2-digit",
        
    });
    const data = hora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
    
return (
    <div className={styles.relogio}>
      <div className={styles.horas}>{horas}</div>
      <div className={styles.data}>{data}</div>
    </div>
  );
}