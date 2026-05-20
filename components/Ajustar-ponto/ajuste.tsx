"use client";

import React, { useState } from "react";
// @ts-ignore: allow importing CSS without type declarations
import "./ajuste.css";

interface FormState {
  dia: string;
  mes: string;
  ano: string;
  hora: string;
  minuto: string;
  tipo: "entrada" | "saida" | "";
  justificativa: string;
  arquivo: File | null;
}

function AjustePonto() {
  const [form, setForm] = useState<FormState>({
    dia: "",
    mes: "",
    ano: "",
    hora: "",
    minuto: "",
    tipo: "",
    justificativa: "",
    arquivo: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, files, type } = e.target as HTMLInputElement;
    if (name === "arquivo" && files) {
      setForm((f) => ({ ...f, arquivo: files[0] || null }));
    } else if (type === "radio" && name === "tipo") {
      setForm((f) => ({ ...f, tipo: value as "entrada" | "saida" }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleDatePartChange(part: "dia" | "mes" | "ano", value: string) {
    // Adicione validações se necessário, por exemplo:
    // if (part === "dia" && (parseInt(value) < 1 || parseInt(value) > 31)) return;
    // if (part === "mes" && (parseInt(value) < 1 || parseInt(value) > 12)) return;
    // if (part === "ano" && value.length > 4) return;
    setForm((f) => ({ ...f, [part]: value }));
  }

  function handleTimePartChange(part: "hora" | "minuto", value: string) {
    // Adicione validações se necessário, por exemplo:
    // if (part === "hora" && (parseInt(value) < 0 || parseInt(value) > 23)) return;
    // if (part === "minuto" && (parseInt(value) < 0 || parseInt(value) > 59)) return;
    setForm((f) => ({ ...f, [part]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    alert("Solicitação enviada (mock). Veja o console.");
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.history.back();
  }

  return (
    <div className="app-bg">
      <div className="card">
        <h1 className="card-title">AJUSTE DE PONTO</h1>

        <form onSubmit={handleSubmit} className="card-form">
          {/* DATA */}
          <div className="field-group">
            <label className="field-label">Data:</label>

            <div className="date-row">
              <div className="date-field">
                <span>Dia</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="DD"
                  name="dia"
                  value={form.dia}
                  onChange={(e) => handleDatePartChange("dia", e.target.value)}
                />
              </div>

              <div className="date-field">
                <span>Mês</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  name="mes"
                  value={form.mes}
                  onChange={(e) => handleDatePartChange("mes", e.target.value)}
                />
              </div>

              <div className="date-field">
                <span>Ano</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="AAAA"
                  name="ano"
                  value={form.ano}
                  onChange={(e) => handleDatePartChange("ano", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* HORÁRIO */}
          <div className="field-group">
            <label className="field-label">Horário:</label>

            <div className="date-row">
              <div className="date-field">
                <span>Hora</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="HH"
                  name="hora"
                  value={form.hora}
                  onChange={(e) => handleTimePartChange("hora", e.target.value)}
                />
              </div>

              <div className="date-field">
                <span>Minuto</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  name="minuto"
                  value={form.minuto}
                  onChange={(e) =>
                    handleTimePartChange("minuto", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
              {/* TIPO */}
          <div className="field-group">
            <label className="field-label">Tipo:</label>

            <div className="date-row">
              <div className="date-field">
                <span>Entrada</span>
                <input
                  type="radio"
                  name="tipo"
                  value="entrada"
                  checked={form.tipo === "entrada"}
                  onChange={handleChange}
                />
              </div>
              <div className="date-field">
                <span>Saída</span>
                <input
                  type="radio"
                  name="tipo"
                  value="saida"
                  checked={form.tipo === "saida"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
            {/* JUSTIFICATIVA */}
          <div className="field-group">
            <label className="field-label">Justificativa:</label>
            <textarea
              name="justificativa"
              placeholder="Digite aqui a justificativa de ajuste de ponto..."
              value={form.justificativa}
              onChange={handleChange}
              rows={5}
            />
          </div>

          {/* ANEXO */}
          <div className="field-group">
            <label className="field-label">Anexo:</label>

            <div className="file-row">
              <label className="file-button">
                ESCOLHER ARQUIVO
                <input type="file" name="arquivo" onChange={handleChange} />
              </label>
              <span className="file-name">
                {form.arquivo
                  ? form.arquivo.name
                  : "Nenhum arquivo selecionado"}
              </span>
            </div>
          </div>

          {/* BOTÕES */}
          <div className="actions">
            <button type="submit" className="submit-btn">
              SOLICITAR
            </button>
            <button className="back-link" onClick={handleBack}>
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AjustePonto;