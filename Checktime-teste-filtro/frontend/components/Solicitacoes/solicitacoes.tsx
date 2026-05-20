"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./solicitacoes.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Filter from "../ui/filter";

interface Abono {
  id: number;
  dataFalta: string;
  justificativa: string;
  anexoUrl: string | null;
  status: "aprovado" | "pendente" | "reprovado";
  criadoEm: string;
}

function formatarData(dateStr: string): string {
  const apenasData = dateStr.split("T")[0];
  const date = new Date(apenasData + "T12:00:00");

  if (isNaN(date.getTime())) return "Data inválida";

  const diaSemana = date.toLocaleDateString("pt-BR", { weekday: "long" });
  const diaMesAno = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const semanaCapitalizado =
    diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
  return `${diaMesAno} | ${semanaCapitalizado}`;
}

export default function SolicitacoesList() {
  const router = useRouter();

  const [abonos, setAbonos] = useState<Abono[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetch("/api/abono")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setAbonos)
      .catch(() => setErro("Não foi possível carregar as solicitações."))
      .finally(() => setCarregando(false));
  }, []);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  const handleRedirect = (abono: Abono) => {
    if (abono.status === "aprovado") {
      router.push("/ajuste-aprovado");
    } else if (abono.status === "pendente") {
      router.push("/ajuste-pendente");
    }
  };

  const abonosFiltrados =
    filtro === ""
      ? abonos
      : abonos.filter((a) => {
          if (filtro === "Aprovado") return a.status === "aprovado";
          if (filtro === "Pendente") return a.status === "pendente";
          return true;
        });

  return (
    <div className="flex flex-col gap-4">
      <Filter filtro={filtro} setFiltro={setFiltro} />

      <div className={`flex flex-col gap-4 ${styles.cardlist}`}>
        {carregando && (
          <p style={{ color: "#888", textAlign: "center", padding: "2rem" }}>
            Carregando...
          </p>
        )}

        {!carregando && erro && (
          <p style={{ color: "red", textAlign: "center", padding: "2rem" }}>
            {erro}
          </p>
        )}

        {!carregando && !erro && abonosFiltrados.length === 0 && (
          <p style={{ color: "#888", textAlign: "center", padding: "2rem" }}>
            Nenhuma solicitação encontrada.
          </p>
        )}

        {!carregando &&
          !erro &&
          abonosFiltrados.map((abono, i) => {
            const isAprovado = abono.status === "aprovado";

            return (
              <div key={abono.id} className={styles.card}>

                {/* Linha principal */}
                <div
                  className={`flex justify-between items-center cursor-pointer ${styles.row2}`}
                  onClick={() => toggle(i)}
                >
                  {/* Esquerda */}
                  <div className="flex items-center gap-2">
                    <ForumRoundedIcon
                      style={{ color: isAprovado ? "#94FC71" : "#0F4F55" }}
                    />
                    <span>{formatarData(abono.dataFalta)}</span>
                  </div>

                  {/* Centro */}
                  <div className="flex items-center gap-2">
                    <h3 className={isAprovado ? styles.aprovado : styles.pendente}>
                      {isAprovado ? "Ajuste aprovado" : "Pendente"}
                    </h3>
                  </div>

                  {/* Direita */}
                  <ArrowForwardIosOutlinedIcon
                    className={`${styles.icon} ${openIndex === i ? styles.rotate : ""}`}
                    style={{ color: "#006400" }}
                  />
                </div>

                {/* Slide */}
                <div
                  className={`${styles.slide} ${openIndex === i ? styles.open : ""}`}
                >
                  <div className={styles.bannerGestor}>
                    <span>Você recebeu uma mensagem!</span>
                    <button
                      className={styles.botaoAjuste}
                      onClick={() => handleRedirect(abono)}
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
      </div>
    </div>
  );
}