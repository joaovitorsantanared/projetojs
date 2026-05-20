"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./solicitacoes.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Filter from "../ui/filter";

const registros = [
  { data: "02/10/2025 | Quinta-feira", Ajuste_Aprovado: "Ajuste aprovado" },
  { data: "11/09/2025 | Quinta-feira", Pendente: "Pendente" },
  { data: "06/08/2025 | Quarta-feira", Pendente: "Pendente" },
  { data: "17/06/2025 | Terça-feira", Ajuste_Aprovado: "Ajuste aprovado" },
  { data: "19/03/2025 | Quarta-feira", Ajuste_Aprovado: "Ajuste aprovado" },
];

export default function SolicitacoesList() {
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ESTADO DO FILTRO
  const [filtro, setFiltro] = useState("");

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  const handleRedirect = (item: typeof registros[0]) => {
    if (item.Ajuste_Aprovado) {
      router.push("/ajuste-aprovado");
    } else if (item.Pendente) {
      router.push("/ajuste-pendente");
    }
  };

  // FILTRO DOS REGISTROS
  const registrosFiltrados =
    filtro === ""
      ? registros
      : registros.filter((item) => {
          if (filtro === "Aprovado") {
            return item.Ajuste_Aprovado;
          }

          if (filtro === "Pendente") {
            return item.Pendente;
          }
        /// Caso seja implementado o ajuste recusado
        //if (filtro === "Recusado"){
        //   return item.Recusado;
        // }

          return true;
        });

  return (
    <div className="flex flex-col gap-4">

      <Filter
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* LISTA */}
      <div className={`flex flex-col gap-4 ${styles.cardlist}`}>
        {registrosFiltrados.map((item, i) => (
          <div key={i} className={styles.card}>

            {/* Linha principal */}
            <div
              className={`flex justify-between items-center cursor-pointer ${styles.row2}`}
              onClick={() => toggle(i)}
            >

              {/* Esquerda */}
              <div className="flex items-center gap-2">
                <ForumRoundedIcon
                  style={{
                    color: item.Ajuste_Aprovado
                      ? "#94FC71"
                      : item.Pendente
                      ? "#0F4F55"
                      : undefined,
                  }}
                />

                <span>{item.data}</span>
              </div>

              {/* Centro */}
              <div className="flex items-center gap-2">

                {item.Ajuste_Aprovado && (
                  <h3 className={styles.aprovado}>
                    {item.Ajuste_Aprovado}
                  </h3>
                )}

                {item.Pendente && (
                  <h3 className={styles.pendente}>
                    {item.Pendente}
                  </h3>
                )}

              </div>

              {/* Direita */}
              <ArrowForwardIosOutlinedIcon
                className={`${styles.icon} ${
                  openIndex === i ? styles.rotate : ""
                }`}
                style={{ color: "#006400" }}
              />
            </div>

            {/* Slide */}
            <div
              className={`${styles.slide} ${
                openIndex === i ? styles.open : ""
              }`}
            >
              <div className={styles.bannerGestor}>
                <span>Você recebeu uma mensagem!</span>

                <button
                  className={styles.botaoAjuste}
                  onClick={() => handleRedirect(item)}
                >
                  Ver detalhes
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}