"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RelatorioCard from "../../components/relatorio/RelatorioCard";
import RelatorioList from "../../components/relatorio/RelatorioList";
import styles from "@/styles/Home.module.css";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import TimerIcon from "@mui/icons-material/Timer";

import Link from "next/link";

export default function RelatorioPage() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />

      <main
        className={styles.main}
        style={{
          marginLeft: isMinimized ? "80px" : "280px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <h1 className={styles.title}>RELATÓRIO</h1>
        <hr className={styles.linha} />

        <div className={styles.cards}>
          <RelatorioCard
            title="Horas Trabalhadas"
            value="40h"
            subValue="Semana Atual"
            icon={
              <WorkHistoryIcon fontSize="large" sx={{ color: "#0F4F55" }} />
            }
          />

          <RelatorioCard
            title="Atrasos"
            value="3"
            subValue="Este mês"
            icon={
              <AccessAlarmIcon fontSize="large" sx={{ color: "#0F4F55" }} />
            }
          />

          <RelatorioCard
            title="Horas Extras"
            value="5h"
            subValue="Semana Atual"
            icon={<TimerIcon fontSize="large" sx={{ color: "#0F4F55" }} />}
          />

          <RelatorioCard
            title="Faltas"
            value="1"
            subValue={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span>Total</span>

                <Link
                  href="/abono-falta"
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#0F4F55",
                  }}
                >
                  Solicitar Abono
                </Link>
              </div>
            }
            icon={<WorkOffIcon fontSize="large" sx={{ color: "#0F4F55" }} />}
          />
        </div>

        <RelatorioList />
      </main>
    </div>
  );
}
