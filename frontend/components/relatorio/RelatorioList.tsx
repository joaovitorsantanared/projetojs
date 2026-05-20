"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./RelatorioList.module.css";

const registros = [
  {
    data: "04/11/2025 | Terça-feira",
    dia: "terça-feira",
    HorasExtras: "00:00",
    HorasFaltantes: "00:00",
    Saldo: "00:00",
  },
  {
    data: "03/11/2025 | Segunda-feira",
    dia: "segunda-feira",
    HorasExtras: "00:00",
    HorasFaltantes: "00:00",
    Saldo: "00:00",
  },
  {
    data: "02/11/2025 | Sábado",
    dia: "sabado",
    HorasExtras: "00:00",
    HorasFaltantes: "00:00",
    Saldo: "00:00",
  },
  {
    data: "03/11/2025 | Sexta-feira",
    dia: "sexta-feira",
    HorasExtras: "00:00",
    HorasFaltantes: "00:00",
    Saldo: "00:00",
  },
  {
    data: "02/11/2025 | Quinta-feira",
    dia: "quinta-feira",
    HorasExtras: "00:00",
    HorasFaltantes: "00:00",
    Saldo: "00:00",
  },
];

export default function RelatorioList() {
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.cardlist}>
      {registros.map((item, index) => (
        <div key={index}>
          <div className={styles.row}>
            <span>{item.data}</span>

            <span>Horas Extras: {item.HorasExtras}</span>

            <span>Horas Faltantes: {item.HorasFaltantes}</span>

            <span>Saldo: {item.Saldo}</span>

            <button className={styles.button} onClick={() => toggle(index)}>
              <KeyboardArrowDownIcon
                className={`${styles.icon} ${
                  openIndex === index ? styles.rotate : ""
                }`}
              />
            </button>
          </div>

          <div
            className={`${styles.slide} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <div className={styles.bannerGestor}>
              <span>Deseja realizar alguma solicitação para seu gestor?</span>

              <button
                className={styles.botaoAjuste}
                onClick={() => router.push("/ajustar-ponto")}
              >
                Ajuste
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
