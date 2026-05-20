import { useState, useEffect } from "react";
import styles from "./BaterPontoCard.module.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Relogio from "../../app/bater-ponto/Relogio";

export default function BaterPontoCard() {
  const [jaBateuPonto, setJaBateuPonto] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  const [somSucesso, setSomSucesso] =
    useState<HTMLAudioElement | null>(null);

  const [somErro, setSomErro] =
    useState<HTMLAudioElement | null>(null);

  const TEMPO_BLOQUEIO = 8 * 60 * 60 * 1000; // 8h

  // Sons
  useEffect(() => {
    setSomSucesso(
      new Audio(
        "https://www.myinstants.com/media/sounds/deltarune-ominous-cancel.mp3"
      )
    );

    setSomErro(
      new Audio(
        "https://www.myinstants.com/media/sounds/deltarune-ominous-sound.mp3"
      )
    );
  }, []);

  // Verifica se já bateu ponto
  useEffect(() => {
    const ultimoPonto = localStorage.getItem("ultimoPonto");

    if (ultimoPonto) {
      const diferenca = Date.now() - Number(ultimoPonto);

      if (diferenca < TEMPO_BLOQUEIO) {
        setJaBateuPonto(true);

        // libera após completar 8h
        setTimeout(() => {
          setJaBateuPonto(false);
          localStorage.removeItem("ultimoPonto");
        }, TEMPO_BLOQUEIO - diferenca);
      }
    }
  }, []);

  const handleClick = () => {
    // Já registrou
    if (jaBateuPonto) {
      somErro?.play();

      setMensagem("Você já registrou o ponto.");
      setTipoMensagem("erro");

      setTimeout(() => {
        setMensagem("");
        setTipoMensagem("");
      }, 3000);

      return;
    }

    // Registrar ponto
    somSucesso?.play();

    setJaBateuPonto(true);

    localStorage.setItem(
      "ultimoPonto",
      Date.now().toString()
    );

    setMensagem("Ponto registrado com sucesso!");
    setTipoMensagem("sucesso");

    setTimeout(() => {
      setMensagem("");
      setTipoMensagem("");
    }, 3000);

    // libera após 8 horas
    setTimeout(() => {
      setJaBateuPonto(false);
      localStorage.removeItem("ultimoPonto");
    }, TEMPO_BLOQUEIO);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBackground}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.389088930866!2d-34.8732622249921!3d-8.061735291965936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a48f26183d%3A0x6a9ebfb27ba8f98d!2sPra%C3%A7a%20Rio%20Branco%20-%20Recife%2C%20PE%2C%2050030-230!5e0!3m2!1spt-BR!2sbr!4v1763494571286!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.overlayContent}>
            <div className={styles.button2}>
              <Relogio />
            </div>

            <button
              className={styles.button}
              onClick={handleClick}
              style={{
                opacity: jaBateuPonto ? 0.6 : 1,
                cursor: "pointer",
              }}
            >
              <TimerOutlinedIcon
                className="mr-0"
                style={{ marginRight: "8px" }}
              />

              {jaBateuPonto
                ? "Ponto Registrado"
                : "Registrar"}
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-0">
        {mensagem && (
          <div
            className={`
              absolute left-0 right-0 text-center
              transition-all duration-300 ease-in-out
              mt-3
              font-semibold
              text-[1.1rem]
              ${
                tipoMensagem === "sucesso"
                  ? "text-[#16a34a]"
                  : "text-[#dc2626]"
              }
            `}
          >
            {mensagem}
          </div>
        )}
      </div>
    </>
  );
}