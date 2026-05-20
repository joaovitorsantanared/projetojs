"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../../styles/Home.module.css";

import BaterPontoCard from "../../components/Bater-ponto/BaterPontoCard";
import PontoCardlist from "../../components/Bater-ponto/PontoCardlist";

export default function BaterPonto() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />

      <main
        className={styles.main}
        style={{
          marginLeft: isMinimized ? "80px" : "280px",
          transition: "0.3s ease",
        }}
      >
        <div className={styles.cards}>
          <BaterPontoCard />
        </div>

        <PontoCardlist />
      </main>
    </div>
  );
}
