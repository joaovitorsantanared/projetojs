import styles from './BaterPontoCardlist.module.css';

const registros = [
  {
    periodos: [
      { data: "04/11/2025", Entrada: "08:00", Saida: "11:30" },
      { data: "04/11/2025", Entrada: "11:31", Saida: "13:00" },
      { data: "04/11/2025", Entrada: "13:01", Saida: "17:00" },
      {Termino: "00:00"},
      {Horas: "-10:00"}
    ],
  },
];

export default function PontoCardlist() {
  return (
    <div className={styles.cardscontainer}>
      

<div className={styles.cardlist}>
  <h2 className={styles.titulo}>Batidas do dia</h2>
  
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Data</th>
        <th>Entrada</th>
        <th>Saída</th>
      </tr>
    </thead>
    <tbody>
      {registros[0].periodos.map((periodo, index) => (
        <tr key={index}>
          <td>{periodo.data}</td>
          <td>{periodo.Entrada}</td>
          <td>{periodo.Saida}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<div className={styles.cardlist2}>
  <div className={styles.header2}>
    <span className={styles.texto3}>
      Sua Jornada Diária Termina Em: 00:00
    </span>

    {/* Linha específica para jornada diaria e banco de horas */}
    <div className={styles.linha2}></div>

    <span className={styles.texto3}>Seu Banco De Horas: -10:00</span>
    <div className={styles.linha2}></div>
  </div>
</div>

      </div>
    
  );
}

