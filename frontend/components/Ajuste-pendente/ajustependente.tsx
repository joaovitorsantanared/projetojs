"use client";

import React from "react";
import styles from "./ajustependente.module.css"; // só cores, bordas, sombras

export default function AjustePendente() {
  const dados = {
    tipo: "Ajuste",
    data: "02/10/2025 | quinta-feira",
    criadaEm: "03/10/2025 | sexta-feira",
    registros: [
      "08:00  02/10 - QUI | Registro pendente",
      "12:03  02/10 - QUI",
      "13:00  02/10 - QUI | Registro pendente",
      "18:01  02/10 - QUI",
    ],
    justificativa: "Falta de internet",
  };

  function handleBack() {
    window.history.back();
  }

  return (
    <div className={`${styles.appBg} flex items-center justify-center min-h-screen p-6`}>
      <div className={`${styles.card} w-full max-w-xl p-10 rounded-2xl shadow-xl backdrop-blur-md`}>
        <h1 className={`${styles.cardTitle} text-center text-3xl font-bold tracking-wide`}>
          AJUSTE PENDENTE
        </h1>

        <hr className={`${styles.divider} my-6`} />

        <div className="space-y-2">
          <p><strong>Tipo:</strong> {dados.tipo}</p>
          <p><strong>Data:</strong> {dados.data}</p>
          <p><strong>Criada em:</strong> {dados.criadaEm}</p>
        </div>

        <h2 className={`${styles.sectionTitle} text-xl font-semibold mt-8 mb-3`}>
          Ajuste pendente
        </h2>

        <div className="space-y-2">
          {dados.registros.map((r, i) => (
            <p key={i}>{r}</p>
          ))}
        </div>

        <h2 className={`${styles.sectionTitle} text-xl font-semibold mt-8 mb-2`}>
          Justificativa
        </h2>

        <p className="mt-2 leading-relaxed">
          {dados.justificativa}
        </p>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleBack}
            className={`${styles.backLink} underline text-sm cursor-pointer`}
          >
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}
