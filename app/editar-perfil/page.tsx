"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EditarPerfilCard from "../../components/Editar-perfil/EditarPerfilCard";
import styles from "../../styles/Home.module.css";

export default function EditarPerfilPage() {
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
        <h1 className={styles.title}>EDITAR O PERFIL</h1>
        <hr className={styles.linha} />

        <div className={styles.cards}>
          <EditarPerfilCard />
        </div>
      </main>
    </div>
  );
}
